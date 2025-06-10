import { Request, Response } from "express";
import { PrismaClient } from "../generated/prisma";
import { logAction } from "../services/log.service";

const prisma = new PrismaClient();

export const getAvailableServices = async (req: Request, res: Response) => {
  const services = await prisma.service.findMany({
    where: { enabled: true },
    orderBy: { name: "asc" },
  });
  res.json(services);
};

export const payForService = async (req: Request, res: Response) => {
  const { serviceId, amount } = req.body;
  const userId = req.user!.userId;

  const user = await prisma.user.findUnique({ where: { id: userId } });
  if (!user?.activeWalletId) throw new Error("No active wallet");

  const wallet = await prisma.wallet.findUnique({
    where: { id: user.activeWalletId },
  });
  const service = await prisma.service.findUnique({ where: { id: serviceId } });

  if (!wallet || !service) throw new Error("Wallet or service not found");
  if (!service.enabled) throw new Error("Service is currently disabled");
  if (wallet.balance < amount) throw new Error("Insufficient wallet balance");

 

  // Simulate transaction
  await prisma.$transaction([
    prisma.wallet.update({
      where: { id: wallet.id },
      data: { balance: { decrement: amount } },
    }),
    prisma.transaction.create({
      data: {
        amount,
        type: "debit",
        fromWalletId: wallet.id,
      },
    }),
  ]);
   await logAction(
     userId,
     "user",
     "Service Payment",
     `Paid ₦${amount} to ${service.name}`
   );

  res.json({ message: `Payment to ${service.name} successful` });
};

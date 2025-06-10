import { Request, Response } from "express";
import { PrismaClient } from "../generated/prisma";
import { errorMonitor } from "events";
import { logAction } from "../services/log.service";

const prisma = new PrismaClient();

export const getAllUsers = async (req: Request, res: Response) => {
  const users = await prisma.user.findMany({
    include: { wallets: true },
  });
  res.json(users);
};

export const getServices = async (req: Request, res: Response) => {
  const services = await prisma.service.findMany();
  res.json(services);
};

export const toggleService = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { serviceId } = req.params;

  const service = await prisma.service.findUnique({
    where: { id: serviceId },
  });

  if (!service) {
    res.status(404).json({ error: "Service not found" });
    return;
  }

  const updated = await prisma.service.update({
    where: { id: serviceId },
    data: { enabled: !service.enabled },
  });

  await logAction(
    req.user!.userId,
    "admin",
    "Toggle Service",
    `${service.name} was ${updated.enabled ? "enabled" : "disabled"}`
  );

  res.json(updated);
};

export const getLogs = async (req: Request, res: Response) => {
  const logs = await prisma.log.findMany({
    orderBy: { createdAt: "desc" },
    take: 100,
  });
  res.json(logs);
};


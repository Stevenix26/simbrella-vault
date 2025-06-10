import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

export const createWallet = async (
  userId: string,
  data: { name: string; type: string }
) => {
  return prisma.wallet.create({
    data: {
      name: data.name,
      type: data.type,
      userId,
    },
  });
};

export const getWallets = async (userId: string) => {
  return prisma.wallet.findMany({
    where: { userId },
    orderBy: { createdAt: "desc" },
  });
};

export const setActiveWallet = async (userId: string, walletId: string) => {
  console.log("Received walletId:", walletId); 
  if (!walletId) {
    throw new Error("Wallet ID is required");
  }
  
  // Make sure wallet belongs to user
  const wallet = await prisma.wallet.findUnique({ where: { id: walletId } });

  if (!wallet || wallet.userId !== userId) {
    throw new Error("Wallet not found or unauthorized");
  }

  return prisma.user.update({
    where: { id: userId },
    data: { activeWalletId: walletId },
  });
};


export const getActiveWallet = async (userId: string) => {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    include: { wallets: true },
  });
  if (!user || !user.activeWalletId) {
    throw new Error("User not found or no active wallet");
  }

  const active = user.wallets.find(
    (wallets) => wallets.id === user.activeWalletId
  );
  if (!active) {
    throw new Error("Active wallet not found");
  }
  return active;
};

export const topUpWallet = async (userId: string, amount: number) => {
  if (!amount || amount <= 0) throw new Error("Invalid amount");

  const user = await prisma.user.findUnique({ where: { id: userId } });
  if (!user?.activeWalletId) throw new Error("No active wallet");

  return prisma.wallet.update({
    where: { id: user.activeWalletId },
    data: { balance: { increment: amount } },
  });
};


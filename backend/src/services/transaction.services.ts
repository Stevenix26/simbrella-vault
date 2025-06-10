import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

export const transfer = async (
  userId: string,
  toWalletId: string,
  amount: number
) => {
  if (!amount || amount <= 0) throw new Error("Invalid amount");

  // Get sender's active wallet
  const sender = await prisma.user.findUnique({
    where: { id: userId },
    include: { wallets: true },
  });

  if (!sender?.activeWalletId) throw new Error("No active wallet set");

  const fromWallet = await prisma.wallet.findUnique({
    where: { id: sender.activeWalletId },
  });
  const toWallet = await prisma.wallet.findUnique({
    where: { id: toWalletId },
  });

  if (!fromWallet || !toWallet) throw new Error("Wallet(s) not found");
  if (fromWallet.id === toWallet.id)
    throw new Error("Cannot transfer to same wallet");
  if (fromWallet.balance < amount) throw new Error("Insufficient balance");

  // Perform transfer in a transaction
  return prisma.$transaction(async (tx) => {
    // Debit sender
    await tx.wallet.update({
      where: { id: fromWallet.id },
      data: { balance: { decrement: amount } },
    });

    // Credit receiver
    await tx.wallet.update({
      where: { id: toWallet.id },
      data: { balance: { increment: amount } },
    });

    // Log transactions
    await tx.transaction.createMany({
      data: [
        {
          amount,
          type: "debit",
          fromWalletId: fromWallet.id,
        },
        {
          amount,
          type: "credit",
          toWalletId: toWallet.id,
        },
      ],
    });

    return { message: "Transfer successful" };
  });
};

export const getTransactions = async (userId: string) => {
  const user = await prisma.user.findUnique({
    where: { id: userId },
  });

  if (!user?.activeWalletId) {
    throw new Error("No active wallet set");
  }

  return prisma.transaction.findMany({
    where: {
      OR: [
        { fromWalletId: user.activeWalletId },
        { toWalletId: user.activeWalletId },
      ],
    },
    orderBy: { createdAt: "desc" },
  });
};


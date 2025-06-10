import { PrismaClient } from "../generated/prisma";
import { subDays, subWeeks, subMonths } from "date-fns";

const prisma = new PrismaClient();

export const getSpendingByPeriod = async (
  userId: string,
  period: "day" | "week" | "month"
) => {
  const user = await prisma.user.findUnique({ where: { id: userId } });
  if (!user?.activeWalletId) throw new Error("No active wallet");

  const now = new Date();
  let since: Date;

  if (period === "day") since = subDays(now, 1);
  else if (period === "week") since = subWeeks(now, 1);
  else since = subMonths(now, 1);

  const transactions = await prisma.transaction.findMany({
    where: {
      fromWalletId: user.activeWalletId,
      createdAt: { gte: since },
      type: "debit",
    },
    orderBy: { createdAt: "desc" },
  });

  const total = transactions.reduce((sum, tx) => sum + tx.amount, 0);

  return {
    period,
    totalSpending: total,
    transactions,
  };
};

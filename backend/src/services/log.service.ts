import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

export const logAction = async (
  actorId: string,
  actorRole: "user" | "admin",
  action: string,
  details: string
) => {
  await prisma.log.create({
    data: {
      actorId,
      actorRole,
      action,
      details,
    },
  });
};

import { PrismaClient } from "../src/generated/prisma";

const prisma = new PrismaClient();

async function main() {
  const services = [
    { name: "Airtime" },
    { name: "Data" },
    { name: "Electricity" },
    { name: "TV Subscription" },
    { name: "Water Bill" },
  ];

  for (const service of services) {
    await prisma.service.upsert({
      where: { name: service.name },
      update: {},
      create: {
        name: service.name,
        enabled: true,
      },
    });
  }

  console.log("✅ Services seeded!");
}

main()
  .catch((e) => {
    console.error("❌ Seeding error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

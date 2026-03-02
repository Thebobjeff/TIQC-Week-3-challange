require("dotenv").config();
const { PrismaClient } = require("@prisma/client");
const generateUsers = require("./seeds/user.seeder");

const prisma = new PrismaClient({
  log: ["error", "info", "query", "warn"],
});

async function main() {
  console.log("Emptying database...");
  // Optional: Clear existing users to avoid unique email conflicts
  await prisma.user.deleteMany({});

  console.log("Generating users...");
  const users = await generateUsers();

  console.log("Seeding data...");
  await prisma.user.createMany({
    data: users,
    skipDuplicates: true, // Safeguard against duplicate emails
  });

  console.log("Seeding completed successfully.");
}

main()
  .then(() => {
    console.log("Committed");
  })
  .catch((e) => {
    console.error("Seeding Error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

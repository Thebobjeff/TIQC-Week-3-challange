// Replace the old import with these two lines:
import pkg from "@prisma/client";
const { PrismaClient } = pkg;

// Keep your faker import as is (it supports named exports)

import { faker } from "@faker-js/faker";

const prisma = new PrismaClient();

const generateUsers = async () => {
  const users = [
    {
      name: "Aria Chen",
      email: "aria@company.io",
      role: "Engineer",
      status: "active",
      Joined: new Date("2024-01-15"),
    },
  ];

  for (let i = 0; i < 5; i++) {
    users.push({
      name: faker.person.fullName(),
      email: faker.internet.email().toLowerCase(),
      role: faker.helpers.arrayElement(["ADMIN", "USER", "ENGINEER"]),
      status: faker.helpers.arrayElement(["active", "inactive", "pending"]),
      Joined: faker.date.past(),
    });
  }
  return users;
};

async function main() {
  console.log("Clearing existing data...");
  await prisma.user.deleteMany();

  console.log("Generating and Seeding data...");
  const users = await generateUsers();

  await prisma.user.createMany({
    data: users,
  });

  console.log("Seed successful!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

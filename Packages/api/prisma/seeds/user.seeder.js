const { faker } = require("@faker-js/faker");

const generateUsers = async () => {
  const users = [
    {
      // id is autoincremented in Prisma, so we can omit it or let Prisma handle it
      name: "Aria Chen",
      email: "aria@company.io",
      role: "Engineer",
      status: "active",
      Joined: new Date("2024-01-15"), // Prisma expects a Date object for DateTime fields
    },
  ];

  // Generating 5 additional random users
  for (let i = 0; i < 5; i++) {
    users.push({
      name: faker.person.fullName(),
      email: faker.internet.email().toLowerCase(), // Ensuring uniqueness/consistency
      role: faker.helpers.arrayElement(["ADMIN", "USER", "ENGINEER"]),
      status: faker.helpers.arrayElement(["active", "inactive", "pending"]),
      Joined: faker.date.past(), // Generates a random past Date object
    });
  }

  return users;
};

module.exports = generateUsers;

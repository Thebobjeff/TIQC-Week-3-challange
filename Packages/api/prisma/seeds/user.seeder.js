const { faker } = require("@faker-js/faker");

const generateUsers = async () => {
  const users = [
    {
      name: "Admin User",
      age: 30,
      email: "admin@example.com",
    },
  ];

  // Generating 10 additional random users
  for (let i = 0; i < 10; i++) {
    users.push({
      name: faker.person.fullName(),
      // Generates a random age between 18 and 80
      age: faker.number.int({ min: 18, max: 80 }),
      email: faker.internet.email(),
    });
  }

  return users;
};

module.exports = generateUsers;

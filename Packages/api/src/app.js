import express from "express";
import pkg from "@prisma/client";
const { PrismaClient } = pkg;

const prisma = new PrismaClient();
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// --- ROUTES ---

// Health Check
app.get("/ping", (req, res) => {
  res.status(200).json({ message: "pong" });
});

// Get all users from Database
app.get("/users", async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch users" });
  }
});

// Create a new user
app.post("/users", async (req, res) => {
  const { name, email } = req.body;
  try {
    const newUser = await prisma.user.create({
      data: { name, email },
    });
    res.status(201).json(newUser);
  } catch (error) {
    res
      .status(400)
      .json({ error: "User creation failed. Email might already exist." });
  }
});

export default app;

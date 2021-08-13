import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const app = express();
const PORT = 5000 || process.env.PORT;

app.get("/user/all", (req: Request, res: Response) => {
  const users = prisma.user.findMany();
  return res.json(users);
});

app.get("/", (req: Request, res: Response) => {
  return res.json("hello");
});

app.listen(PORT, () => console.log("🔥 server running at ", PORT, "🔥"));

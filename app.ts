import { findByIdentifier, findByOperator } from "./query/readQuery";
import express, { Request, Response } from "express";
import { PrismaClient, Prisma } from "@prisma/client";
import faker from "faker";
import { createMany } from "./query/createQuery";
import prisma from "./client";

const app = express();
const PORT = 5000 || process.env.PORT;

app.get("/user/all", (req: Request, res: Response) => {
  const users = prisma.user.findMany();
  return res.json(users);
});

app.get("/", (req: Request, res: Response) => {
  return res.json("hello");
});

const runQuery = async (): Promise<void> => {
  // createMany();
  // findByIdentifier();
  findByOperator();
};
runQuery();

/* start server on port */
app.listen(PORT, () => console.log("🔥 server running at ", PORT, "🔥"));

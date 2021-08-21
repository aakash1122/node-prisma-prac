import express, { Request, Response } from "express";
import prisma from "./client";
import readQuery from "./query/readQuery";

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
  // updateQuery();
  // deleteQuery();
  readQuery();
};
runQuery();

/* start server on port */
app.listen(PORT, () => console.log("🔥 server running at ", PORT, "🔥"));

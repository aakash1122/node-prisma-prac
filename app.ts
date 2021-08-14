import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import faker from "faker";

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

const seed = async () => {
  const count = new Array(100).fill(null);
  console.log(count.length);
  count.map(async (_, i) => {
    // await prisma.user.create({
    //   data: {
    //     email: faker.internet.email(),
    //     name: faker.name.findName(),
    //   },
    // });
    // await prisma.post.create({
    //   data: {
    //     title: faker.random.words(15),
    //     content: faker.random.words(150),
    //     authorId: faker.datatype.number(200),
    //     published: faker.datatype.boolean(),
    //   },
    // });
  });

  const runQuery = async (): Promise<void> => {
    // seed();
  };

  runQuery();

  app.listen(PORT, () => console.log("🔥 server running at ", PORT, "🔥"));
};

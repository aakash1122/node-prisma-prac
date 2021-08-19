import express, { Request, Response } from "express";
import { PrismaClient, Prisma } from "@prisma/client";
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
  count.map(async (_, i) => {
    /* seed user data */
    // await prisma.user.create({
    //   data: {
    //     email: faker.internet.email(),
    //     name: faker.name.findName(),
    //   },
    // });
    /* seed post data */
    // await prisma.post.create({
    //   data: {
    //     title: faker.random.words(15),
    //     content: faker.random.words(150),
    //     authorId: faker.datatype.number(100),
    //     published: faker.datatype.boolean(),
    //   },
    // });
    /* seed profile data */
    // await prisma.profile.create({
    //   data: {
    //     bio: faker.lorem.words(50 + i * 1),
    //     userId: i ?? 1,
    //   },
    // });
  });
};

const runQuery = async (): Promise<void> => {
  // seed();
};

runQuery();

seed();
/* start server on port */
app.listen(PORT, () => console.log("🔥 server running at ", PORT, "🔥"));

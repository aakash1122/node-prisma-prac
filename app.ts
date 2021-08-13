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

const runQuery = async (): Promise<void> => {
  // await prisma.user.create({
  //   data: {
  //     email: "aakash@gmail.com",
  //     name: "aakash",
  //     profile: {
  //       create: {
  //         bio: "i love my wife",
  //       },
  //     },
  //     posts: {
  //       create: {
  //         title: "my first post",
  //       },
  //     },
  //   },
  // });

  const post = await prisma.post.update({
    where: {
      id: 1,
    },
    data: {
      published: true,
    },
  });

  const allUsers = await prisma.user.findMany({
    include: {
      posts: true,
      profile: true,
    },
  });
  console.log(allUsers);
};

runQuery();

app.listen(PORT, () => console.log("🔥 server running at ", PORT, "🔥"));

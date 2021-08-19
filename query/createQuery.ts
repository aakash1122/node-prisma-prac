import { Prisma, PrismaClient } from "@prisma/client";
import faker from "faker";

const prisma = new PrismaClient();

export const createByGeneratedType = async (): Promise<void> => {
  let user: Prisma.UserCreateInput;
  user = {
    email: "testt@gamil.com",
    name: "testing",
  };
};

export const createMany = async () => {
  const users = await prisma.user.createMany({
    data: [
      { email: faker.internet.email(), name: faker.name.findName() },
      { email: faker.internet.email(), name: faker.name.findName() },
      { email: faker.internet.email(), name: faker.name.findName() },
      { email: faker.internet.email(), name: faker.name.findName() },
      { email: faker.internet.email(), name: faker.name.findName() },
    ],
    skipDuplicates: true,
  });

  const posts = await prisma.post.createMany({
    data: [
      {
        title: faker.lorem.words(22),
        content: faker.lorem.words(100),
        authorId: faker.datatype.number(100),
      },
      {
        title: faker.lorem.words(22),
        content: faker.lorem.words(100),
        authorId: faker.datatype.number(100),
      },
      {
        title: faker.lorem.words(22),
        content: faker.lorem.words(100),
        authorId: faker.datatype.number(100),
      },
    ],
  });

  console.log("users", users);
  console.log("posts", posts);
};

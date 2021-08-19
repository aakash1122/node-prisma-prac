import { PrismaClient, Prisma } from "@prisma/client";
import faker from "faker";

const prisma = new PrismaClient();

const count = new Array(100).fill(null);
count.map(async (_, i) => {
  /* seed user data */
  await prisma.user.create({
    data: {
      email: faker.internet.email(),
      name: faker.name.findName(),
    },
  });
  /* seed post data */
  await prisma.post.create({
    data: {
      title: faker.random.words(15),
      content: faker.random.words(150),
      authorId: faker.datatype.number(100),
      published: faker.datatype.boolean(),
    },
  });
  /* seed profile data */
  await prisma.profile.create({
    data: {
      bio: faker.lorem.words(50 + i * 1),
      userId: i ?? 1,
    },
  });
});

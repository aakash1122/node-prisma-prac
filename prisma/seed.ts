import { PrismaClient, Prisma } from "@prisma/client";
import faker from "faker";

const prisma = new PrismaClient();

async function seed() {
  for (let index = 1; index < 100; index++) {
    await prisma.user.create({
      data: {
        email: faker.internet.email(),
        name: faker.name.findName(),
        profile: {
          create: {
            bio: faker.lorem.words(50),
          },
        },
        posts: {
          createMany: {
            data: Array.from({
              length: Math.ceil(index * Math.random()),
            }).map(() => ({
              title: faker.random.words(15),
              content: faker.random.words(100),
              love: faker.datatype.number(200),
              published: faker.datatype.boolean(),
            })),
          },
        },
      },
    });
  }
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

import { PrismaClient, Prisma } from "@prisma/client";
import faker from "faker";
import _ from "underscore";

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
              tags: _.chunk(
                _.shuffle([
                  "random",
                  "weekly",
                  "webdev",
                  "faltu",
                  "420",
                  "ninja",
                ]),
                Math.ceil(Math.random() * 5)
              )[0],
            })),
          },
        },
      },
    });
  }
}

// const docs = await prisma.post.findMany({
//   where: {},
//   select: {
//     id: true,
//   },
// });

// const tags = ["random", "weekly", "webdev", "faltu", "420", "ninja"];
// docs.forEach(async (doc) => {
//   await prisma.post.update({
//     data: {
//       tags: {
//         set: _.chunk(_.shuffle(tags), Math.ceil(Math.random() * 5))[0],
//       },
//     },
//     where: {
//       id: doc.id,
//     },
//   });
// });

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

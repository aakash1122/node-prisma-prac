import { Prisma } from "@prisma/client";
import faker from "faker";
import prisma from "../client";

export default async function updateQuery() {
  //   updateUser();
  //   updatePost();
  updateLove();
}

export async function updateUser() {
  const res = await prisma.user.update({
    where: {
      id: 1,
    },
    data: {
      name: "aakash",
      email: "aakash@hotmail.com",
    },
    include: {
      profile: true,
    },
  });
  console.log(res);
}

const updatePost = async () => {
  const res = await prisma.post.update({
    where: {
      id: 4,
    },
    data: {
      authorId: 1,
      title: "updated author of this post",
    },
  });
  console.log(res);
};

const updateLove = async () => {
  const ids = await prisma.post.findMany({
    select: {
      id: true,
    },
  });

  ids.forEach(async (val) => {
    const res = await prisma.post.update({
      where: {
        id: val.id,
      },
      data: {
        love: {
          increment: faker.datatype.number(100),
        },
      },
    });
  });
};

import { PrismaClient, Prisma } from "@prisma/client";
import faker from "faker";
import prisma from "../client";

export const findByIdentifier = async () => {
  const Firstuser = await prisma.user.findFirst();

  const userByName = await prisma.user.findMany({
    where: {
      name: {
        contains: "Miss",
      },
      email: {
        contains: "hot",
      },
    },
  });
  console.log(userByName);
};

export const findByOperator = async () => {
  //   const user = await prisma.user.findMany({
  //     where: {
  //       email: {
  //         endsWith: "hotmail.com",
  //       },
  //     },
  //   });
  //   const user = await prisma.user.count({
  //     where: {
  //       OR: [
  //         {
  //           email: {
  //             endsWith: "yahoo.com",
  //           },
  //         },
  //         {
  //           email: {
  //             endsWith: "hotmail.com",
  //           },
  //         },
  //       ],
  //     },
  //     select: {
  //       email: true,
  //       name: true,
  //     },

  //     // skip: 5,
  //     // take: 10,
  //   });

  const user = await prisma.user.findFirst({
    where: {
      id: {
        gt: 111,
      },
    },
  });

  console.log(user);
};

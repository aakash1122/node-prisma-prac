import { Prisma } from "@prisma/client";
import faker from "faker";
import prisma from "../client";

export default async function deleteQuery() {
  deleteUserAndPost();
}

const deleteUserAndPost = async () => {
  //   const deletePost = prisma.post.deleteMany({
  //     where: {
  //       authorId: 9,
  //     },
  //   });

  //   const deleteprofile = prisma.profile.delete({
  //     where: {
  //       userId: 9,
  //     },
  //   });

  //   const deleteUser = prisma.user.delete({
  //     where: {
  //       id: 9,
  //     },
  //   });

  //   const transaction = prisma.$transaction([
  //     deletePost,
  //     deleteprofile,
  //     deleteUser,
  //   ]);

  const resp = await prisma.user.delete({
    where: {
      email: "aakash@hotmail.com",
    },
  });

  console.log(resp);
};

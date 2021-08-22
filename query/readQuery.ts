import { PrismaClient, Prisma } from "@prisma/client";
import faker from "faker";
import prisma from "../client";
import _ from "underscore";

export default async function readQuery() {
  filterAndSort();
}

// export const findByIdentifier = async () => {
//   const Firstuser = await prisma.user.findFirst();

//   const userByName = await prisma.user.findMany({
//     where: {
//       name: {
//         contains: "Miss",
//       },
//       email: {
//         contains: "hot",
//       },
//     },
//   });
//   console.log(userByName);
// };

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
  // const user = await prisma.user.findFirst({
  //   where: {
  //     id: {
  //       gt: 111,
  //     },
  //   },
  // });
  // console.log(user);
};

// const selectFields = async () => {
//   const resp = await prisma.user.findUnique({
//     where: {
//       id: 10,
//     },
//     select: {
//       name: true,
//       posts: {
//         select: {
//           title: true,
//         },
//       },
//     },
//   });

/* include query */

const selectFields = async () => {
  // const resp = await prisma.user.findUnique({
  //   where: {
  //     id: 10,
  //   },
  //   include: {
  //     posts: {
  //       select: {
  //         love: true,
  //         title: true,
  //       },
  //     },
  //   },
  // });
  // const resp = await prisma.user.findMany({
  //   where: {
  //     AND: [
  //       {
  //         posts: {
  //           none: {
  //             love: {
  //               lt: 120,
  //             },
  //           },
  //           every: {
  //             published: true,
  //           },
  //         },
  //       },
  //     ],
  //   },
  // });
  // const resp = await prisma.user.update({
  //   where: {
  //     id: 18,
  //   },
  //   data: {
  //     posts: {
  //       updateMany: {
  //         where: {
  //           published: false,
  //           love: {
  //             gt: 50,
  //           },
  //         },
  //         data: {
  //           published: true,
  //         },
  //       },
  //     },
  //   },
  // });
  /* fluent api */
  // const resp = await prisma.user
  //   .findUnique({
  //     where: {
  //       id: 114,
  //     },
  //   })
  //   .posts({});
  // console.log(resp);
};

/* filtering and sorting */
const filterAndSort = async () => {
  /* The following query:
  Returns all User records with:
  an email address that ends with prisma.io and
  at least one published post (a relation query)
  Returns all User fields
  Includes all related Post records where published equals true 
*/
  // const resp = await prisma.user.findMany({
  //   where: {
  //     OR: [
  //       {
  //         email: {
  //           endsWith: "yahoo.com",
  //         },
  //       },
  //       {
  //         email: {
  //           endsWith: "hotmail.com",
  //         },
  //       },
  //     ],
  //     posts: {
  //       every: {
  //         published: {
  //           equals: true,
  //         },
  //       },
  //     },
  //   },
  //   select: {
  //     id: true,
  //     name: true,
  //   },
  // });
  // await prisma.user.updateMany({
  //   where:{
  //     posts:{
  //       every:{
  //         tags:{
  //         }
  //       }
  //     }
  //   }
  // })
  // const resp = await prisma.post.findMany({
  //   where: {
  //     tags: {
  //       has: "420",
  //     },
  //   },
  //   select: {
  //     authorId: true,
  //     title: true,
  //     tags: true,
  //   },
  //   take: 2,
  // });
  // const userEmail = Prisma.validator<Prisma.UserSelect>()({
  //   email: true,
  // });

  /* Aggregation, grouping, and summarizing */
  //* avg love of all post
  // const avgLove = await prisma.post.aggregate({
  //   _avg: {
  //     love: true,
  //   },
  // });

  //*sum of love
  // const totalLove = await prisma.post.aggregate({
  //   _sum: {
  //     love: true,
  //   },
  // });

  //* find post having most love
  // const mostLovedPost = await prisma.post.findFirst({
  //   orderBy: {
  //     love: "desc",
  //   },
  // });

  //*  find user with most post
  // const userWithMostPost = await prisma.user.findMany({
  //   include: {
  //     _count: {
  //       select: {
  //         posts: true,
  //       },
  //     },

  //   },

  // });

  // const userWithMostPost = await prisma.post.groupBy({
  //   by: ["authorId"],
  //   _count: {
  //     title: true,
  //   },
  //   _sum: {
  //     love: true,
  //   },
  //   orderBy: {
  //     _count: {
  //       title: "desc",
  //     },
  //   },

  //   take: 1,
  // });

  // const a = await prisma.user.findMany({
  //   include: {
  //     _count: {
  //       select: {
  //         posts: true,
  //       },
  //     },
  //   },
  // });

  // let a = await prisma.$queryRaw(
  //   `SELECT * FROM "User" left join "Post"
  //   on "User.id" = "Post.authorId" ;
  // `
  // );

  // let a = await prisma.user
  //   .findUnique({
  //     where: {
  //       id: 1,
  //     },
  //   })
  //   .posts();

  // let raw = await prisma.$queryRaw(
  //   `select "User"."id", "User"."name","Post"."total_posts","Post"."love_count"
  //   from "User"
  //   inner join
  //   (
  //     select "Post"."authorId", count("Post"."title") as "total_posts" ,
  //     sum("Post"."love") as "love_count"
  //     from "Post"
  //     group by "Post"."authorId"

  //     ) as "Post"

  //   on "User".id = "Post"."authorId"
  //   order by "total_posts" desc
  //   ;`
  // );

  // console.log(raw);

  let res = await prisma.user.findMany({
    select: {
      name: true,
      email: true,
      posts: {
        select: {
          title: true,
          love: true,
        },
        take: 2,
      },
    },
    take: 10,
  });
};

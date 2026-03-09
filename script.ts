import { prisma } from "./lib/prisma";

async function main() {
  // create a new user
  //   const user = await prisma.user.create({
  //     data: {
  //       name: "Trek",
  //       email: "tarek@gm.com",
  //     },
  //   });
  //   console.log("Created user:", user);

  // create a new post
  const post = await prisma.post.create({
    data: {
      title: "Good though",
      content: "once in a life",
      published: true,
      author: {
        connect: { id: 1 }, // connect theis post to user with id 1
      },
    },
  });
  console.log("Post created", post);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

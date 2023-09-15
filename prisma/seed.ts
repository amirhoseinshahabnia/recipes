import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function main() {
  const amir = await prisma.user.upsert({
    where: { email: 'test@test.com' },
    update: {},
    create: {
      email: 'test@test.com',
      name: 'Amir',
      profileImgUrl:
        'https://lh3.googleusercontent.com/a/ACg8ocIL1KCIqXlIq1eZ8JmEn9g-Se2N0ftp4ZqRZyVU0eZGAeQ=s96-c',
      googleId: '1234',
    },
  });
  console.log({ amir });
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

import { prisma } from '../lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';

export default async function Test() {
  const session = await getServerSession(authOptions);

  const user = await prisma.user.findFirst({
    where: {
      email: session?.user?.email as string,
    },
  });

  return <section>Hi There, {user?.name}</section>;
}

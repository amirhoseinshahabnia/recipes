import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';
import { prisma } from '../lib/prisma';

export default async function Test() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return (
      <section className="flex flex-col items-center">
        <div>Please Sign in above</div>
      </section>
    );
  }

  const user = await prisma.user.findFirst({
    where: {
      // @ts-ignore
      googleId: session?.user?.id as string,
    },
  });
  return <section>Hi There {user ? user.name : null}</section>;
}

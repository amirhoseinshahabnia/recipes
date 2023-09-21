import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';
import { prisma } from '../lib/prisma';

export default async function Dashboard() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return (
      <section className="flex flex-col items-center">
        <div>Please Sign in above</div>
      </section>
    );
  }

  try {
    const user = await prisma.user.findFirst({
      where: {
        // @ts-ignore
        googleId: 'amirhosein.shahabnia@gmail.com',
      },
    });
    return <section>Hi There {user ? user.name : null}</section>;
  } catch (err) {
    console.log(err);
    return (
      <section className="flex flex-col items-center">
        <div>Something went wrong</div>
      </section>
    );
  }
}

import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';
import { prisma } from '../lib/prisma';
import Card from '../components/card';

export default async function Dashboard() {
  const session = await getServerSession(authOptions);

  try {
    const user = await prisma.user.findFirst({
      where: {
        // @ts-ignore
        googleId: session?.user?.id as string,
      },
    });
    const recipes = await prisma.recipe.findMany({
      where: {
        ownerId: user?.id,
      },
    });

    // console.log(recipes);

    return (
      <section className="px-4 md:px-0">
        Hi There {user ? user.name : null}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 2xl:max-w-7xl mt-8">
          {recipes.map((recipe, i) => (
            <div key={i}>
              <h4>{recipe.title}</h4>
              <img src={recipe.img} alt={recipe.title} />
            </div>
          ))}
        </div>
      </section>
    );
  } catch (err) {
    console.log(err);
    return (
      <section className="flex flex-col items-center">
        <div>Something went wrong</div>
      </section>
    );
  }
}

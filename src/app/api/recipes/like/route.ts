import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../auth/[...nextauth]/route';
import { prisma } from '@/app/lib/prisma';

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);

  const user = await prisma.user.findFirst({
    where: {
      // @ts-ignore
      googleId: session?.user?.id as string,
    },
  });

  if (!user) {
    return NextResponse.json({
      msg: 'No user could be found, please try again',
    });
  }

  const { title, recipeId, img } = await req.json();

  try {
    await prisma.recipe.upsert({
      where: {
        recipeId,
      },
      update: {},
      create: {
        ownerId: user.id,
        title,
        recipeId,
        img,
      },
    });

    return NextResponse.json(
      { message: 'Recipe successfully added' },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error }, { status: 500 });
  }
}

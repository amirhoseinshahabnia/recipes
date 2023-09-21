import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/app/lib/prisma';

export async function POST(req: NextRequest) {
  // Check if the request is authorized first
  if (req.headers.get('authorization') !== process.env.NEXTAUTH_SECRET) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { name, email, profileImgUrl, googleId } = await req.json();

  try {
    const user = await prisma.user.upsert({
      where: {
        email,
      },
      update: {},
      create: {
        name,
        email,
        profileImgUrl,
        googleId,
      },
    });

    return NextResponse.json(
      { user, message: 'Succesfully saved on DB' },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}

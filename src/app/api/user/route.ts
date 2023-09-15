import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/app/lib/prisma';

export async function POST(req: NextRequest) {
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

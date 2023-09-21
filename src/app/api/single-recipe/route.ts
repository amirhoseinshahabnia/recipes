import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get('id');

  try {
    const res = await fetch(
      `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${id}/information`,
      {
        headers: {
          'X-RapidAPI-Key': process.env.RAPID_API_KEY as string,
          'X-RapidAPI-Host': process.env.RAPID_API_HOST as string,
        },
      }
    );
    const data = await res.json();

    return NextResponse.json({ data });
  } catch (err) {
    return NextResponse.json({ err }, { status: 500 });
  }
}

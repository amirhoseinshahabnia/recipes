import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get('query');
  const res = await fetch(
    `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?query=${query}&number=30`,
    {
      headers: {
        'X-RapidAPI-Key': process.env.RAPID_API_KEY as string,
        'X-RapidAPI-Host': process.env.RAPID_API_HOST as string,
      },
    }
  );

  const data = await res.json();

  return NextResponse.json({ data });
}

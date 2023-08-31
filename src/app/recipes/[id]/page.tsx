'use client';

import Image from 'next/image';
import { useFetch } from '@/app/helpers/useFetch';

export default function Page({ params }: { params: { id: string } }) {
  const { data, error } = useFetch(`/api/single-recipe?id=${params.id}`);

  console.log(data);

  if (!data) return <div>Loading</div>;
  if (error) return <div>Something went wrong, please try again</div>;

  return (
    <section className="mx-4 md:mx-0">
      <div className="mb-7 w-full relative h-80 md:h-96">
        <Image
          src={data.data.image}
          fill
          style={{ objectFit: 'cover' }}
          alt={data.data.title}
        />
      </div>
      <div className="mb-5">
        <h1 className="text-4xl">{data.data.title}</h1>
        <p>
          <span className="font-bold">Prepration Minutes:</span>{' '}
          {data.data.preparationMinutes} |{' '}
          <span className="font-bold">Cooking Minutes:</span>{' '}
          {data.data.cookingMinutes} |{' '}
          <span className="font-bold">Servings:</span> {data.data.servings}
        </p>
      </div>
      <p className="font-bold underline">Summary:</p>
      <p
        dangerouslySetInnerHTML={{ __html: data.data.summary }}
        className="mb-5"
      />
      <p className="font-bold underline">Extended Ingredients:</p>
      <ul className="list-disc mb-5">
        {data.data.extendedIngredients.map((item: any, i: number) => (
          <li key={i}>
            {item.name}: {item.amount} {item.measures.us.unitLong}
          </li>
        ))}
      </ul>
      {data.data.diets.length !== 0 ? (
        <>
          <p className="font-bold underline">Diets:</p>
          <ul className="list-disc mb-5">
            {data.data.diets.map((item: any, i: number) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </>
      ) : null}
      <p className="font-bold underline">Instructions:</p>
      <p
        dangerouslySetInnerHTML={{ __html: data.data.instructions }}
        className="mb-5"
      />
    </section>
  );
}

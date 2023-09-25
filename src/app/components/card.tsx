import { Dispatch, SetStateAction, useState } from 'react';
import Image from 'next/image';
import Button from './button';
import { revalidateTag } from 'next/cache';

interface Props {
  title: string;
  src: string;
  id: string;
  setToastVisible?: Dispatch<
    SetStateAction<{
      type: string;
      visible: boolean;
      message: string;
    }>
  >;
}

const Card: React.FC<Props> = ({ title, src, id, setToastVisible }) => {
  const [liked, setLiked] = useState(false);
  const handleLike = async () => {
    try {
      const res = await fetch('/api/recipes/like', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,
          recipeId: id,
          img: src,
        }),
      });
      await res.json();
      revalidateTag('recipes');
      setLiked(true);
      setToastVisible?.({
        type: 'success',
        visible: true,
        message: 'Recipe successfully liked!',
      });
    } catch (error) {
      console.log(error);
      setToastVisible?.({
        type: 'error',
        visible: true,
        message: 'Something went wrong',
      });
    }
  };

  return (
    <div className="border rounded-2xl border-gray-100 relative mx-4 md:mx-0">
      <Image
        src={src}
        alt={title}
        className="rounded-t-2xl"
        width={640}
        height={300}
        style={{ objectFit: 'cover' }}
      />
      <div className="p-6 flex flex-col gap-y-4">
        <div className="flex flex-row items-center justify-between gap-x-6">
          <p>{title}</p>
          <Button link={`/recipes/${id}`} title="See More" type="secondary" />
        </div>
        <div className="flex flew-row justify-between">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill={liked ? 'currentColor' : ''}
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke={!liked ? 'currentColor' : ''}
            className="w-6 h-6 cursor-pointer"
            onClick={handleLike}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Card;

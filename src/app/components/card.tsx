import Image from 'next/image';
import Link from 'next/link';

interface Props {
  title: string;
  src: string;
  id: string;
}

const Card: React.FC<Props> = ({ title, src, id }) => {
  return (
    <div className="border rounded-2xl border-gray-100 relative mx-4 md:mx-0">
      <Image
        src={src}
        alt={title}
        className="rounded-t-2xl"
        width={440}
        height={300}
        style={{ objectFit: 'cover' }}
      />
      <div className="p-6">
        <p>{title}</p>
        <Link href={`/recipes/${id}`}>See More</Link>
      </div>
    </div>
  );
};

export default Card;

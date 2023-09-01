import Image from 'next/image';
import Button from './button';

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
        width={640}
        height={300}
        style={{ objectFit: 'cover' }}
      />
      <div className="p-6 flex items-center justify-between gap-x-6">
        <p>{title}</p>
        <Button link={`/recipes/${id}`} title="See More" type="secondary" />
      </div>
    </div>
  );
};

export default Card;

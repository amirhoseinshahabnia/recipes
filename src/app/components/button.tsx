import Link from 'next/link';
import classNames from 'classnames';

interface Props {
  link: string;
  title: string;
  type?: 'main' | 'secondary';
}

export default function Button({ link, title, type = 'main' }: Props) {
  return (
    <Link
      href={link}
      className={classNames(
        'py-2 px-4 rounded-lg hover:opacity-80 text-sm min-w-max',
        { 'bg-lime-300': type === 'main', 'bg-rose-300': type === 'secondary' }
      )}
    >
      {title}
    </Link>
  );
}

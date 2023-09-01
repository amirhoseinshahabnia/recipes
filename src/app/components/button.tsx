import Link from 'next/link';
import classNames from 'classnames';

interface Props {
  link?: string;
  title: string;
  type?: 'main' | 'secondary';
  action?: 'link' | 'button';
  clickHandler?: any;
}

export default function Button({
  link = '/',
  title,
  type = 'main',
  action = 'link',
  clickHandler,
}: Props) {
  if (action === 'link') {
    return (
      <Link
        href={link}
        className={classNames(
          'py-2 px-4 rounded-lg hover:opacity-80 text-sm min-w-max',
          {
            'bg-lime-300': type === 'main',
            'bg-rose-300': type === 'secondary',
          }
        )}
      >
        {title}
      </Link>
    );
  }

  return (
    <button
      className={classNames(
        'py-2 px-4 rounded-lg hover:opacity-80 text-sm min-w-max',
        {
          'bg-lime-300': type === 'main',
          'bg-rose-300': type === 'secondary',
        }
      )}
      onClick={clickHandler}
    >
      {title}
    </button>
  );
}

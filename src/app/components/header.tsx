import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="flex flex-col items-center pt-8 md:pt-12">
      <h1 className="text-4xl mb-4 underline hover:opacity-80 text-lime-200">
        <Link href="/">Recipe App</Link>
      </h1>
      <p className="mb-7">Search for a recipe here</p>
      <div className="border-gradient" />
    </header>
  );
};

export default Header;

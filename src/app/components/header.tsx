'use client';

import Link from 'next/link';
import Button from './button';
import { signIn, signOut, useSession } from 'next-auth/react';

const Header: React.FC = () => {
  const { status } = useSession();

  return (
    <header className="flex flex-col pt-8 md:pt-12">
      <div className="container mx-auto 2xl:max-w-7xl flex justify-between items-start px-4 md:px-0">
        <div>
          <h1 className="text-4xl mb-4 underline hover:opacity-80 text-lime-200">
            <Link href="/">Recipe App</Link>
          </h1>
          <p className="mb-7">Search for a recipe here</p>
        </div>
        {status === 'authenticated' ? (
          <Button
            title="Signout"
            type="secondary"
            action="button"
            clickHandler={signOut}
          />
        ) : (
          <Button
            title="Signin"
            type="secondary"
            action="button"
            clickHandler={() => signIn('google')}
          />
        )}
      </div>
      <div className="border-gradient" />
    </header>
  );
};

export default Header;

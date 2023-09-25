'use client';

import Link from 'next/link';
import Button from './button';
import { signIn, signOut, useSession } from 'next-auth/react';

const Header: React.FC = () => {
  const { status } = useSession();

  return (
    <header className="flex flex-col pt-8 md:pt-12">
      <div className="container mx-auto 2xl:max-w-7xl flex flex-col md:flex-row justify-between md:items-center px-4 md:px-0 pb-8 md:pb-12">
        <div className="mb-4 md:mb-0">
          <h1 className="text-4xl underline hover:opacity-80 text-lime-200">
            <Link href="/">Recipe App</Link>
          </h1>
        </div>
        {status === 'authenticated' ? (
          <div className="flex items-center justify-between">
            <Link href="/dashboard" className="mr-4 md:mr-8 hover:opacity-80">
              Dashboard
            </Link>
            <Button
              title="Signout"
              type="secondary"
              action="button"
              clickHandler={signOut}
            />
          </div>
        ) : (
          <div>
            <Button
              title="Signin"
              type="secondary"
              action="button"
              clickHandler={() => signIn('google')}
            />
          </div>
        )}
      </div>
      <div className="border-gradient" />
    </header>
  );
};

export default Header;

import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from './components/header';
import { NextAuthProvider } from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Recipe App',
  description: "Utlizing Rapid API's Spoonacular",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextAuthProvider>
          <Header />
          <main className="container mx-auto py-8 md:py-12 2xl:max-w-7xl">
            {children}
          </main>
        </NextAuthProvider>
      </body>
    </html>
  );
}

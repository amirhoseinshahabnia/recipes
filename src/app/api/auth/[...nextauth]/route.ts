import { NextAuthOptions } from 'next-auth';
import NextAuth from 'next-auth/next';
import GoogleProvider from 'next-auth/providers/google';

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider === 'google') {
        try {
          const res = await fetch(
            'https://recipes-eosin-three.vercel.app/api/user',
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                name: user.name,
                email: user.email,
                profileImgUrl: user.image,
                googleId: user.id,
              }),
            }
          );
          console.log(process.env.NEXTAUTH_URL);
          if (res.ok) return true;
        } catch (err) {
          console.log(err);
          return false;
        }
      }
      return false;
    },
  },
};
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

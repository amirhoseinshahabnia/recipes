import NextAuth from 'next-auth/next';
import GoogleProvider from 'next-auth/providers/google';

const handler = NextAuth({
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
          if (res.ok) return true;
        } catch (err) {
          console.log(err);
          return false;
        }
      }
      return false;
    },
  },
});

export { handler as GET, handler as POST };

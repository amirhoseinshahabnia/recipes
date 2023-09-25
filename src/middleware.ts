export { default } from 'next-auth/middleware';

export const config = {
  matcher: [
    '/api/recipes',
    '/api/recipes/:path*',
    '/api/single-recipe',
    '/dashboard',
    '/recipes/:path*',
  ],
};

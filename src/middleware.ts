export { default } from 'next-auth/middleware';

export const config = {
  matcher: ['/api/recipes', '/api/single-recipe', '/dashboard'],
};

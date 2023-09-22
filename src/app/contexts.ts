import { createContext } from 'react';

type UserProps = {
  id: string;
  email: string;
  name: string;
  profileImgUrl: string;
  googleId: string;
};

export const UserContext = createContext<UserProps>({
  id: '',
  email: '',
  name: '',
  profileImgUrl: '',
  googleId: '',
});

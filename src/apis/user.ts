import { serverClient } from '../utils/axios';

const DOMAIN = 'users';

export const getUsers = () => {
  return serverClient.get(`/${DOMAIN}`);
};

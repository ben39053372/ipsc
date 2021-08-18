import { mainClient } from '../services/mainServer';

const DOMAIN = 'users';

export const getUsers = () => {
  return mainClient.get(`/${DOMAIN}`);
};

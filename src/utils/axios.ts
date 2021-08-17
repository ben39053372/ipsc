import axios from 'axios';

export const serverClient = axios.create({
  baseURL: 'localhost:8080',
  timeout: 3000,
});

serverClient.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

serverClient.interceptors.response.use(
  res => {
    return res;
  },
  error => {
    return Promise.reject(error);
  },
);

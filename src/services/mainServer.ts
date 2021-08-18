import axios from 'axios';

export const mainClient = axios.create({
  baseURL: 'localhost:8080',
  timeout: 3000,
});

mainClient.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

mainClient.interceptors.response.use(
  res => {
    return res;
  },
  error => {
    return Promise.reject(error);
  },
);

import axios from 'axios';

export const courseClient = axios.create({
  baseURL: 'localhost:8080/courses',
  timeout: 3000,
});

courseClient.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

courseClient.interceptors.response.use(
  res => {
    return res;
  },
  error => {
    return Promise.reject(error);
  },
);

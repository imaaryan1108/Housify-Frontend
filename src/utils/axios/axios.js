import axios from 'axios';

export const withAuthInstance = axios.create({
  baseURL: 'http://localhost:9000/',
  timeout: 10000,
  headers: {
    authorization: `Bearer ${window.localStorage.bearer}`,
  },
});

export const withoutAuthInstance = axios.create({
  baseURL: 'http://localhost:9000/',
  timeout: 10000,
});

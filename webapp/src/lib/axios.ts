import Axios from 'axios';

import { API_URL } from '@/config';
import { ApiError } from '@/types';

export const axios = Axios.create({
  baseURL: API_URL
});

axios.defaults.withCredentials = true;

axios.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    const data: ApiError = {
      message: error.response?.data?.message || error.message,
      status: error.response?.status || 500
    };
    return Promise.reject(data);
  }
);

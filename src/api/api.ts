import axios from 'axios';

export const BASE_URL = 'https://gym.futurefocusadvisor.in/api/v1';

export const getAxiosInstance = async () => {
  try {
  } catch (error) {
  } finally {
    const instance = axios.create({
      baseURL: BASE_URL,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });

    instance.interceptors.request.use(
      function (config) {
        return config;
      },
      function (error) {
        return Promise.reject(error);
      },
    );

    instance.interceptors.response.use(
      response =>
        new Promise((resolve, reject) => {
          // console.log('RESPONSE=====', response);
          resolve(response);
        }),
      async error => {
        console.log('AXIOS ERROR===', error.response.data);
        if (error.response) {
          return new Promise((resolve, reject) => {
            reject(error.response.data);
          });
        }
      },
    );

    return instance;
  }
};

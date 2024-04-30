import axios from 'axios';

const instance = axios.create({
  
  timeout: 10000, 
  baseURL: process.env.REACT_APP_API_TEST_URL,
});

instance.defaults.headers.get['Content-Type'] = 'multipart/form-data';

export const get = (url: string, params: any, config = {}, data?: any) => {
  return new Promise((resolve, reject) => {
    instance({
      method: 'get',
      url,
      params,
      data,
      ...config,
    })
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
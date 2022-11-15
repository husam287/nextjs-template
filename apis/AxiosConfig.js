import axios from 'axios';
import store from 'reducers';
import { hideLoader, showLoader } from 'reducers/appReducer';
import DomainUrl from './Domain';

const getAxiosInstance = (locale) => {
  let language = locale;
  if (!language) {
    if (typeof window !== 'undefined') {
      const storedLang = localStorage.getItem('lang');
      language = storedLang;
    } else language = 'en';
  }

  const axiosInstance = axios.create({
    baseURL: `${DomainUrl}/${language}/api`,
    headers: {
      'content-type': 'application/json',
      Accept: 'application/json',
    },
  });

  axiosInstance.interceptors.request.use(
    async (config) => {
      store.dispatch(showLoader());
      let newConfig = config;

      /** Adding token */
      if (typeof window !== 'undefined') {
        const token = localStorage.getItem('token');
        const newHeaders = {
          Authorization: `Token ${token}`,
          ...config.headers,
        };

        if (token) {
          newConfig = {
            ...config,
            headers: newHeaders,
          };
        }
      }

      return newConfig;
    },
    (err) => Promise.reject(err?.response?.data),
  );

  axiosInstance.interceptors.response.use(
    (response) => {
      store.dispatch(hideLoader());
      return response.data;
    },
    (err) => {
      store.dispatch(hideLoader());
      if (err?.response?.data) return Promise.reject(err?.response?.data);
      return null;
    },
  );

  return axiosInstance;
};

export default getAxiosInstance;

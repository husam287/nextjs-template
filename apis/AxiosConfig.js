import axios from "axios";
import { getCookie } from "cookies-next";
import DomainUrl from "./Domain";
//import { store } from "../redux/store";
//import { hideLoader, showLoader } from "../redux/actions/AppActions";

const _axios = axios.create({
  headers: {
    "content-type": "application/json",
    "Accept": "application/json",
  }
})

_axios.interceptors.request.use(
  async (config) => {
    //store.dispatch(showLoader())

    //adjust language
    let lang = getCookie('lang')
    config.baseURL = `${DomainUrl}/${lang}/api`

    /** Adding token */
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");
      config.headers = {
        Authorization: token ? `Token ${token}` : undefined,
        ...config.headers,
      }
    }

    return config;
  },
  (err) => {
    //store.dispatch(hideLoader())
    return Promise.reject(err?.response?.data);
  }
);

_axios.interceptors.response.use(
  (response) => {
    // store.dispatch(hideLoader())
    return response.data;
  },
  (err) => {
    // store.dispatch(hideLoader())
    if (err?.response?.data) return Promise.reject(err?.response?.data);
  }
)

export default _axios;

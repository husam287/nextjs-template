import axios from "axios";
import DomainUrl from "./Domain";
//import { store } from "../redux/store";
//import { hideLoader, showLoader } from "../redux/actions/AppActions";

const lang = localStorage.getItem('lang')

const _axios = axios.create({
  baseURL: `${DomainUrl}/${lang}/api`,
})

_axios.interceptors.request.use(
  async (config) => {
    //store.dispatch(showLoader())

    /** Adjust request */
    if (typeof window === "undefined") {
      config.headers = {
        "content-type": "application/json",
        Accept: "application/json",
        ...config.headers,
      }
    } else {
      const token = localStorage.getItem("token");
      config.headers = {
        Authorization: token ? `Token ${token}` : undefined,
        "content-type": "application/json",
        Accept: "application/json",
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

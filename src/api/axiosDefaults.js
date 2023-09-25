import axios from "axios";

axios.defaults.baseURL = 'https://portfolio-peb-api-144b61f0639d.herokuapp.com/';
axios.defaults.headers.post['Content-Type'] = "multipart/form-data";
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();
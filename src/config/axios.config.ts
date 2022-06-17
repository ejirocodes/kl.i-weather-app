import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_OPENWEATHER_BASEURL,
  timeout: 20000,
});

export { axiosInstance };

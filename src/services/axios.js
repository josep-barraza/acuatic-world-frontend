import axios from "axios";

const URL = import.meta.env.VITE_BACKEND_URL;

const instance = axios.create({
  baseURL: `${URL}`,
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default instance;

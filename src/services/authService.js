import axios from "axios";


const URL = import.meta.env.VITE_BACKEND_URL;

const API = `${URL}/aquaticWorld/usuarios`;

export const loginRequest = (data) =>
  axios.post(`${API}/login`, data);

export const registerRequest = (data) =>
  axios.post(`${API}/register`, data);

axios.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const getPerfil = (token) =>
  axios.get(`${API}/perfil`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

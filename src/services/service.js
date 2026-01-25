import axios from "axios";

const URL = import.meta.env.VITE_BACKEND_URL;

const API = `${URL}`;

export const getProductos = (page = 1, limit = 8) => {
  return axios.get(
    `${API}/aquaticWorld/productos?page=${page}&limit=${limit}`
  );
};

export const getCursos = () => {
  return axios.get(`${API}/aquaticWorld/cursos`
  );
};


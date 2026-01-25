import axios from "axios";
import { API_URL } from "../config/api.js"


const API = `${API_URL}`;

export const getProductos = (page = 1, limit = 8) => {
  return axios.get(
    `${API}/aquaticWorld/productos?page=${page}&limit=${limit}`
  );
};

export const getCursos = () => {
  return axios.get(`${API}/aquaticWorld/cursos`
  );
};


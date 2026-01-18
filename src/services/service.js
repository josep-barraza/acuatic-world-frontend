import axios from "axios";

const API = "http://localhost:3000";

export const getProductos = (page = 1, limit = 8) => {
  return axios.get(
    `${API}/aquaticWorld/productos?page=${page}&limit=${limit}`
  );
};

export const getCursos = () => {
  return axios.get(`${API}/aquaticWorld/cursos`
  );
};


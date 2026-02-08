import axios from "axios";
import { API_URL } from "../config/api.js"


const API = `${API_URL}`;

export const getProductos = (page, limit, categoria) =>
  axios.get(`${API}/aquaticWorld/productos`, {
    params: { page, limit, categoria }
  });



export const getCursos = () => {
  return axios.get(`${API}/aquaticWorld/cursos`
  );
};


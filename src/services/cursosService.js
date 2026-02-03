import axios from "axios";
import { API_URL } from "../config/api.js"



const API = `${API_URL}/aquaticWorld`;


export const comprarCursoRequest = (cursoId, token) => {
  return axios.post(
    `${API}/cursos/comprar`,
    { cursoId },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const getCursosUsuarioRequest = (token) =>
  axios.get(`${API}/usuarios/cursos`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

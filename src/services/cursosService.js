import axios from "axios";

const URL = import.meta.env.vite_backend_URL;

const API = `${URL}/aquaticWorld`;

// ✅ COMPRAR CURSO
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

// ✅ OBTENER CURSOS DEL USUARIO (PERFIL)
export const getCursosUsuarioRequest = (token) =>
  axios.get(`${API}/usuarios/cursos`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

import axios from "axios";

const API = "http://localhost:3000/aquaticWorld";

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

import style from "./Profile.module.css";
import { useEffect, useState } from "react";
import { getCursosUsuarioRequest } from '../../services/cursosService.js';
import { useAuth } from "../../context/useAuth";



const Profile = () => {
  const { token,user } = useAuth();

  const [cursos, setCursos] = useState([]);

  useEffect(() => {
  if (!token) return;

  const fetchCursos = async () => {
    try {
      const res = await getCursosUsuarioRequest(token);
      setCursos(res.data.cursos);
    } catch (error) {
      console.error(error);
    }
  };

  fetchCursos();
}, [token]);



 if (!token) return <h3>Debes iniciar sesión</h3>;


  return (
    <>
    <div className={style.cuerpo}>
      <section className={style.usuario}>
        <h1>🌊🌊Bienvenido a Aquatic World 🌊🌊</h1>
        <h2>🤿 {user.email} 🤿</h2>
      </section>

<section className={style.cursos}>
  <h2>Mis Cursos</h2>

  {cursos.length === 0 &&   <h3 className={style.curso}>No tienes cursos aún</h3>}

<div className={style.cursosGrid}>
  {cursos.map((c) => (
    <div key={c.id} className={style.card}>
      <img
        src={`https://backend-acuaticworld.onrender.com/public/${c.img}`}
        alt={c.nombre}
        className={style.cardImg}
      />
      <h4>{c.nombre}</h4>
      <p>{c.descripcion}</p>
       <button className={style.cursoBtn}> <strong>ingresar</strong> </button>
    </div>
  ))}
 
</div>

</section>
</div>
    </>
  );
};

export default Profile;

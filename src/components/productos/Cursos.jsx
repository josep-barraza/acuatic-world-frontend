import style from './Cursos.module.css'
import imgPrincipal from '../../assets/img/cursos.png'
import { getCursos } from '../../services/service';
import { useEffect, useState } from 'react';
import { comprarCursoRequest } from "../../services/cursosService.js";
import { getCursosUsuarioRequest } from '../../services/cursosService.js';
import { useAuth } from "../../context/useAuth";
import { API_URL } from "../config/api.js"



const Cursos = () => {

  const [cursos, setCursos] = useState([])

  const { token } = useAuth();

const handleComprar = async (cursoId) => {
  if (!token) {
    alert("Debes iniciar sesión para comprar un curso");
    return;
  }

  try {
    await comprarCursoRequest(cursoId, token);

    const res = await getCursosUsuarioRequest(token);
    setMisCursos(res.data.cursos);

    alert("Curso comprado correctamente 🎉");
  } catch (error) {
    alert(
      error.response?.data?.msg || "Error al comprar curso"
    );
  }
};



 useEffect(() => {
  getCursos()
    .then((res) => setCursos(res.data.cursos))
    .catch(console.error);
}, []);

const [misCursos, setMisCursos] = useState([]);

useEffect(() => {
  if (!token) return;

  getCursosUsuarioRequest(token)
    .then(res => setMisCursos(res.data.cursos))
    .catch(() => {});
}, [token]);

const yaComprado = (id) =>
  misCursos.some(c => c.id === id);

  return (

    <div>
      <section className={style.piePagina}>
           
           <div className={style.productos}>
             <p><strong><em>Sumerguete </em> </strong></p>
             <p><strong><em>Descubre</em></strong></p>
             <p><strong><em>Explora</em></strong></p>
            <p><strong><em>Un Nuevo Mundo</em></strong></p> 
             
           </div>
     
           
             <img src = {imgPrincipal} alt= "imagen de portada" className={style.imgPortada}  />
           
           <div className={style.productos}>
            <p><strong><em>Conoce Nuestros</em> </strong></p> 
             <p><strong><em>Curso </em></strong></p> 
            <p> <strong> <em>Escoge uno </em> </strong></p> 
            <p> <strong><em>No te lo pierdas</em> </strong></p> 
            
           </div>

           
            
         </section>

         <section className={style.cardCursos}>
            {cursos.map( (m) => (
              <div key={m.id} className={style.card}> 
              
              <img 
                src={`${API_URL}/${m.img}`}
                alt= {m.nombre}
              /> 
              <h4><strong>{m.nombre}</strong></h4>
              <p>{m.descripcion}</p> 
              <p>Duración {m.duracion} meses</p>
              <p>Precio $ {m.valor}</p>
             {yaComprado(m.id) ? (
            <span className="badge bg-secondary">Adquirido</span>
          ) : (
              <button className={style.boton}
              onClick={()=> handleComprar(m.id)}>
                  <strong>COMPRAR CURSO</strong>
                </button>
           )}





              </div>
            ) )}

           </section>
      </div>
   )
}

export default Cursos
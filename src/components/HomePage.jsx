import { NavLink } from "react-router-dom"
import imgPrincipal from "../assets/img/pagina-principal.png"
import style from './HomePage.module.css'

const HomePage = () => {



  return (
    <>
     <section className={style.piePagina}>
      
      <div className={style.productos}>
        <strong>Descubre Nuestros</strong>
        <strong>CURSOS</strong>
        <button type="button" className="btn btn-primary">
             
              <NavLink to="/cursos" className="nav-link">
               ! AQUI ¡
              </NavLink>
            
        </button>
      </div>

      
        <img src = {imgPrincipal} alt= "imagen de portada" className={style.imgPortada}  />
      
      <div className={style.productos}>
        <strong>Descubre Nuestros</strong>
        <strong>PRODUCTOS</strong>
        <button type="button" className="btn btn-primary">
    
              <NavLink to="/productos" className="nav-link">
               ! AQUI ¡
              </NavLink>
            
        </button>
      </div>

       
    </section>
    <section className={style.descripcion}>
      <div  className={style.historia}>
         <div ><strong><h2> 🌊 Historia del Buceo </h2> </strong></div>
         <div>
          <p>El buceo es una actividad que ha acompañado al ser humano desde la antigüedad, nacida de la necesidad de explorar y aprovechar los recursos del mar. Las primeras evidencias de buceo se remontan a civilizaciones antiguas como la griega, egipcia y romana, donde los buzos descendían en apnea para recolectar esponjas, perlas y alimentos, o para realizar tareas militares y de rescate. <br /><br />

Durante siglos, el buceo se practicó únicamente conteniendo la respiración. No fue sino hasta el siglo XVI cuando comenzaron a desarrollarse los primeros equipos rudimentarios, como campanas de buceo, que permitían a los buzos permanecer más tiempo bajo el agua. Estos avances marcaron el inicio del buceo asistido. <br /><br />

El gran salto tecnológico ocurrió en el siglo XX, especialmente en la década de 1940, cuando Jacques-Yves Cousteau y Émile Gagnan inventaron el regulador autónomo, dando origen al buceo moderno con equipo autónomo (SCUBA). Este invento revolucionó la exploración submarina, haciéndola más segura y accesible. <br /><br />

Con el tiempo, el buceo evolucionó desde una actividad principalmente laboral y militar hacia una práctica recreativa, científica y deportiva. Hoy en día, el buceo es una forma de exploración, conservación y conexión con el océano, permitiendo a millones de personas descubrir la riqueza y biodiversidad del mundo submarino.</p></div>
      </div>

      <div className={style.historia}>
        <div><strong><h2>🤿 Buceo Profesional y Recreativo</h2> </strong></div>
        <div>El buceo es una actividad que combina aventura, disciplina y una profunda conexión con el entorno marino. A lo largo del tiempo, no solo se ha desarrollado como una práctica recreativa, sino también como una profesión especializada que requiere formación, experiencia y altos estándares de seguridad. <br /><br />

En el ámbito laboral, el buceo profesional desempeña un papel fundamental en sectores como la investigación científica, la construcción submarina, la acuicultura, el rescate, la inspección de estructuras y el mantenimiento de embarcaciones. Los buzos profesionales trabajan en condiciones exigentes, donde la preparación física, el conocimiento técnico y el respeto por los protocolos de seguridad son esenciales para realizar tareas complejas bajo el agua. <br /><br />

Por otro lado, el buceo recreativo ofrece una experiencia única de exploración y disfrute. Permite descubrir paisajes submarinos, observar la biodiversidad marina y experimentar una sensación de calma y libertad difícil de encontrar en otras actividades. Es una práctica accesible para personas de todas las edades, siempre que cuenten con la capacitación adecuada, y se ha convertido en una forma de turismo sostenible y de contacto directo con la naturaleza. <br /><br />

Tanto en su dimensión profesional como recreativa, el buceo fomenta valores como la responsabilidad, el trabajo en equipo y el cuidado del medio ambiente marino. Ya sea como profesión o como hobby, el buceo representa una oportunidad de crecimiento personal, aprendizaje continuo y respeto por el océano.</div>
      </div>
    </section>

    </>
  )
}

export default HomePage
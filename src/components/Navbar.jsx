import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/img/logo.png";
import styles from "./Navbar.module.css";
import { useAuth } from "../context/useAuth";

export default function Navbar() {
  const { token, logout } = useAuth();
  const isAuth = !!token;
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className={`navbar navbar-expand-lg navbar-dark ${styles.navbar}`}>
      <div className="container-fluid">

        
        <NavLink to="/" className="navbar-brand">
          <img src={logo} alt="Aquatic World" className={styles.logo} />
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <NavLink to="/cursos" className="nav-link">
                Cursos
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/productos" className="nav-link">
                Productos
              </NavLink>
            </li>

         {/*    <li className="nav-item">
              <NavLink to="/planificacion" className="nav-link">
                Planifica tu buceo
              </NavLink>
            </li>
 */}
            {isAuth ? (
              
              <>
               <li className="nav-item">
                  <NavLink to="/carrito"  className="nav-link">
                    🛒
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink to="/perfil" className="nav-link">
                    Perfil
                  </NavLink>
                </li>

            

                <li className="nav-item">
                  <button
                    onClick={handleLogout}
                    className="btn btn-outline-light ms-3"
                  >
                    Cerrar Sesión
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <NavLink to="/register" className="nav-link">
                    Registrate
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink to="/login" className="nav-link">
                    Iniciar sesión
                  </NavLink>
                </li>
              </>
            )}

          </ul>
        </div>
      </div>
    </nav>
  );
}

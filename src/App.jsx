import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


import HomePage from "./components/HomePage";
import Cursos from "./components/productos/Cursos";
import Productos from "./components/productos/Productos";
import Planificacion from "./components/tuBuceo/Planificacion";
import Bitacora from "./components/tuBuceo/Bitacora";
import Login from "./components/sesion/Login";
import Register from "./components/sesion/Register";
import PrivateRoute from "./components/PrivateRoute";
import Perfil from "./components/sesion/Profile";

function App() {
  return (
    <div className="app-background">
      <Navbar />

      <main className="page-wrapper">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cursos" element={<Cursos />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/planificacion" element={<Planificacion />} />
          <Route path="/bitacora" element={<Bitacora />} />
          <Route path="/carrito" element={<Carrito />} />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/perfil" element=
           {<PrivateRoute>
             <Perfil />
           </PrivateRoute>} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;

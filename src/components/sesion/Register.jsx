import { useState } from "react";
import { useAuth } from "../../context/useAuth";
import style from "./Register.module.css";

const Register = () => {
  const { register } = useAuth();

  const [form, setForm] = useState({
    nombre: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    });
  };

   const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await register(form); 

      
      setForm({
        nombre: "",
        email: "",
        password: "",
      });

      alert("Usuario registrado correctamente 🎉");
    } catch (error) {
      alert(
        error.response?.data?.msg || "Error al registrar"
      );
    }
  };

  return (
    <section className={style.page}>
      <form className={style.register} onSubmit={handleSubmit}>
        <h2>Registrate</h2>

        <div className="input-group mb-3">
         
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="nombre"
              placeholder="Username"
              value={form.username}
              onChange={handleChange}
              required
            />
            <label htmlFor="username">Nombre de Usuario</label>
          </div>
        </div>

        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="name@example.com"
            value={form.email}
            onChange={handleChange}
            required
          />
          <label htmlFor="email">Email</label>
        </div>

        <div className="form-floating mb-4">
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
          />
          <label htmlFor="password">Contraseña</label>
        </div>

        <button className="btn btn-primary w-100" type="submit">
          Crear usuario
        </button>
      </form>
    </section>
  );
};

export default Register;

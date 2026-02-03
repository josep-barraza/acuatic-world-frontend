import { useState } from "react";
import { useAuth } from "../../context/useAuth";
import { useNavigate } from "react-router-dom";
import style from "./Login.module.css";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await login(form);

     
      setForm({
        email: "",
        password: "",
      });

      alert("Login correcto ✅");
      navigate("/"); 
    } catch (error) {
      alert(error.response?.data?.msg || "Error al iniciar sesión");
    }
  };

  return (
    <section className={style.page}>
      <form className={style.register} onSubmit={handleSubmit}>
        <h2>Inicia sesión</h2>

        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="name@example.com"
            required
          />
          <label>Email</label>
        </div>

        <div className="form-floating mb-4">
          <input
            type="password"
            className="form-control"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Password"
            required
          />
          <label>Contraseña</label>
        </div>

        <button className="btn btn-primary w-100">
          Iniciar sesión
        </button>
      </form>
    </section>
  );
};

export default Login;

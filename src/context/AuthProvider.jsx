
import { useState, useEffect } from "react";
import { AuthContext } from "./AuthContext.js";
import { loginRequest, registerRequest } from "../services/authService.js";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(
    localStorage.getItem("token")
  );

  useEffect(() => {
    token
      ? localStorage.setItem("token", token)
      : localStorage.removeItem("token");
  }, [token]);

const login = async (data) => {
  const res = await loginRequest(data);

  setToken(res.data.token);

  // opcional: decodificar token
  setUser({ email: data.email });
};
  const register = async (data) => {
    const res = await registerRequest(data);
    setUser(res.data.user);
    setToken(res.data.token);
  };

  const logout = () => {
    setUser(null);
    setToken(null);
  };
  
  

  return (
    <AuthContext.Provider
      value={{ user, token, login, register, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;




















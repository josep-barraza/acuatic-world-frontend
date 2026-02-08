import { useState, useMemo, useEffect } from "react";
import { AuthContext } from "./AuthContext.js";
import { loginRequest, registerRequest } from "../services/authService.js";

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));

  
  const user = useMemo(() => {
    if (!token) return null;

    try {
      const payload = JSON.parse(atob(token.split(".")[1]));
      return { email: payload.email };
    } catch {
      return null;
    }
  }, [token]);

 
  useEffect(() => {
    token
      ? localStorage.setItem("token", token)
      : localStorage.removeItem("token");
  }, [token]);

  const login = async (data) => {
    const res = await loginRequest(data);
    setToken(res.data.token);
  };

const register = async (data) => {
  await registerRequest(data);
};



  const logout = () => setToken(null);

  return (
    <AuthContext.Provider value={{ user, token, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

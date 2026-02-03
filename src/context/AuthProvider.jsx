import { useState } from "react";
import { AuthContext } from "./AuthContext.js";
import { loginRequest, registerRequest } from "../services/authService.js";

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));

/*   LOGIN */

  const login = async (data) => {
    const res = await loginRequest(data);

    const newToken = res.data.token;

    localStorage.setItem("token", newToken);
    setToken(newToken);
  };

  /* 
  REGISTER
  */
  const register = async (data) => {
    const res = await registerRequest(data);

    const newToken = res.data.token;

    localStorage.setItem("token", newToken);
    setToken(newToken);
  };

  /* 
  LOGOUT
  */
  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

 
  const isAuth = !!token;

  return (
    <AuthContext.Provider
      value={{
        token,
        isAuth,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;



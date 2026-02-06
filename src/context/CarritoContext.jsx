import { useState } from "react";
import { CarritoContext } from "./carrito.context";
import { useAuth } from "./useAuth";

import {
  agregarACarritoRequest,
  obtenerCarritoRequest,
  eliminarProductoRequest,
  vaciarCarritoRequest
} from "../services/carrito.service.js";

export const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);
  const { token } = useAuth(); 

  const cargarCarrito = async () => {
    if (!token) return;

    const { data } = await obtenerCarritoRequest(token);
    setCarrito(data.items || []);
  };

  const agregarProducto = async (id) => {
    await agregarACarritoRequest(id, token);
    await cargarCarrito();
  };

 
  const eliminarProducto = async (id) => {
    await eliminarProductoRequest(id, token);
    await cargarCarrito();
  };

  
  const vaciarCarrito = async () => {
    await vaciarCarritoRequest(token);
    setCarrito([]);
  };

  return (
    <CarritoContext.Provider
      value={{
        carrito,
        cargarCarrito,
        agregarProducto,
        eliminarProducto,
        vaciarCarrito
      }}
    >
      {children}
    </CarritoContext.Provider>
  );
};

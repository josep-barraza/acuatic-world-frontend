import { useState } from "react";
import { CarritoContext } from "./carrito.context";
import {
  agregarACarritoRequest,
  obtenerCarritoRequest
} from "../services/carrito.service";

export const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);
  const token = localStorage.getItem("token");

  const cargarCarrito = async () => {
    const { data } = await obtenerCarritoRequest(token);
    setCarrito(data.items || []);
  };

  const agregarProducto = async (id) => {
    await agregarACarritoRequest(id, token);
    await cargarCarrito();
  };

  return (
    <CarritoContext.Provider
      value={{ carrito, cargarCarrito, agregarProducto }}
    >
      {children}
    </CarritoContext.Provider>
  );
};

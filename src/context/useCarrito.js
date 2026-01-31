import { useContext } from "react";
import { CarritoContext } from "./carrito.context";

export const useCarrito = () => useContext(CarritoContext);

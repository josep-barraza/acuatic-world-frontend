import instance from "../api/instance"; 

export const agregarACarritoRequest = (productoId) =>
  instance.post("/carrito/agregar", { productoId });

export const obtenerCarritoRequest = () =>
  instance.get("/carrito");

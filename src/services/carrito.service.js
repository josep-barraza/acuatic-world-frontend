import instance from "../api/instance"; 

export const agregarACarritoRequest = (productoId) =>
  instance.post("/aquaticWorld/carrito/agregar", { productoId });

export const obtenerCarritoRequest = () =>
  instance.get("/aquaticWorld/carrito");

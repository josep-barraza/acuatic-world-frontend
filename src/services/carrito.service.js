import axios from "axios";
import { API_URL } from "../config/api.js"

const API = `${API_URL}/aquaticWorld`; 

export const agregarACarritoRequest = (productoId, token) =>
 

  axios.post(
    `${API}/carrito/agregar`,
    { productoId },
    {
      headers: { Authorization: `Bearer ${token}` }
    }
  );

export const obtenerCarritoRequest = (token) =>
  axios.get(`${API}/carrito`, {
    headers: { Authorization: `Bearer ${token}` }
  });


export const eliminarProductoRequest = (id, token) =>
  axios.delete(`${API}/carrito/${id}`, {
    headers: { Authorization: `Bearer ${token}` }
  });

export const vaciarCarritoRequest = (token) =>
  axios.delete(`${API}/delete/carrito`, {
    headers: { Authorization: `Bearer ${token}` }
  });
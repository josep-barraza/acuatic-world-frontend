import axios from "axios";
import { API_URL } from "../config/api";

const API = `${API_URL}/acuaticworld`;

export const agregarACarritoRequest = (productoId, token) =>
  axios.post(
    `${API}/carrito/agregar`,
    { productoId },
    {
      headers: { Authorization: `Bearer ${token}` }
    }
  );

export const obtenerCarritoRequest = (token) =>
  axios.post(`${API}/carrito`, {
    headers: { Authorization: `Bearer ${token}` }
  });

import { useEffect, useMemo } from "react";
import { useCarrito } from "../../context/useCarrito.js";
import style from "./Carrito.module.css";

const Carrito = () => {
  const {
    carrito,
    cargarCarrito,
    eliminarProducto,
    vaciarCarrito
  } = useCarrito();

  useEffect(() => {
    cargarCarrito();
  }, []);

  const total = useMemo(() => {
    return carrito.reduce(
      (acc, item) => acc + item.precio * item.cantidad,
      0
    );
  }, [carrito]);

  if (!carrito.length) {
    return <div className={style.carrioVacio} >  
    <h1 ><strong> 🛒 Tu carrito está vacío </strong></h1> 
                 
    <h2><strong>!Que espera agrega los mejores productos ¡</strong></h2>

    <h2><strong> Descubre las profundidades</strong></h2>   

       </div> ;
  }

  console.log(carrito)


  return (
    <section className={style.container}>
      <h1>Tu Carrito</h1>

      {carrito.map((item) => (
        <div key={item.id}
             className={style.card}>
          <img
            src={`https://backend-acuaticworld.onrender.com/public/${item.img}`}
            alt={item.nombre}
          />

          <div className={style.info}>
            <h3>{item.nombre}</h3>
            <p>Cantidad: {item.cantidad}</p>
            <p>Precio: ${item.precio}</p>
            <p>
              Subtotal: <strong>${item.precio * item.cantidad}</strong>
            </p>

            <button className={style.btnCarrito}   onClick={() => eliminarProducto(item.id)}>
              ❌ Eliminar
            </button>
          </div>
        </div>
      ))}

      <button className={style.btnCarrito} onClick={vaciarCarrito}>
        🗑 Vaciar carrito
      </button>

      <div className={style.totalBox}>
        <h2>Total: ${total}</h2>
        <button className={style.btnComprar}>Finalizar compra</button>
      </div>
    </section>
  );
};

export default Carrito;

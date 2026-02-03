import { useEffect, useState } from "react";
import { getProductos } from "../../services/service.js";
import style from "./Productos.module.css";
import imgPrincipal from "../../assets/img/productos.png";
import { useCarrito } from "../../context/useCarrito";


const categorias = [
  "Todas",
  "Aletas",
  "Botellas",
  "Botines",
  "Cascos",
  "Chalecos",
  "Consolas",
  "Manometros",
  "Reguladores",
  "Relojes",
  "Trajes",
  "Visores",
  "Guantes",
];

const Productos = () => {
  const [productos, setProductos] = useState([]);
  const [page, setPage] = useState(1);
  const [categoriaActiva, setCategoriaActiva] = useState("Todas");

  const { agregarProducto } = useCarrito(); // ✅ solo UNA vez

  useEffect(() => {
    getProductos(page, 8)
      .then((res) => setProductos(res.data.productos))
      .catch(console.error);
  }, [page]);

const normalizar = (txt) =>
  txt?.toString().trim().toLowerCase();

const productosFiltrados =
  categoriaActiva === "Todas"
    ? productos
    : productos.filter(
        (p) =>
          normalizar(p.categoria) === normalizar(categoriaActiva)
      );


  return (
    <section className={style.layout}>
      <aside className={style.categorias}>
        <h3>Categorías</h3>
        {categorias.map((cat) => (
          <p
            key={cat}
            className={categoriaActiva === cat ? style.activa : ""}
            onClick={() => setCategoriaActiva(cat)}
          >
            {cat}
          </p>
        ))}
      </aside>

      <main className={style.main}>
        <div className={style.hero}>
          <img
            src={imgPrincipal}
            alt="productos de buceo"
            className={style.imgPortada}
          />
          <div className={style.heroText}>
            <h3>Conoce nuestros productos</h3>
            <p>Explora las profundidades</p>
          </div>
        </div>

        <section className={style.productos}>
          {productosFiltrados.map((p) => (
            <div key={p.id} className={style.card}>
              <img
                src={`https://backend-acuaticworld.onrender.com/public/${p.img}`}
                alt={p.nombre}
              />
              <h4>{p.nombre}</h4>
              <span>{p.categoria}</span>
              <p>{p.descripcion}</p>
              <span>Stock: {p.stock}</span>

              <button
                className={style.boton}
                onClick={() => agregarProducto(p.id,
                  alert("producto agregado al carrito 🎉")
                )}
              >
                Agregar al carrito
              </button>
            </div>
          ))}
        </section>
      </main>

      <div className={style.paginacion}>
        <button disabled={page === 1} onClick={() => setPage(page - 1)}>
          ◀
        </button>
        <span>Página {page}</span>
        <button onClick={() => setPage(page + 1)}>▶</button>
      </div>
    </section>
  );
};

export default Productos;

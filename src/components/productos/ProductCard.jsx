import style from "./ProductCard.module.css";

const ProductCard = ({ nombre, precio, imagen }) => {
  return (
    <div className={style.card}>
      <img src={imagen} alt={nombre} />
      <h4>{nombre}</h4>
      <p>${precio}</p>
      <button>Agregar</button>
    </div>
  );
};

export default ProductCard;

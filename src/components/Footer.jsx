import style from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={style.footer}>
      
      <div className={style.redes}>
        
        <div className={style.social}>
  <span>Síguenos:</span>

  <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
    <i className="fi fi-brands-facebook"></i>
  </a>

  <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
    <i className="fi fi-brands-twitter"></i>
  </a>

  <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
    <i className="fi fi-brands-youtube"></i>
  </a>

  <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
    <i className="fi fi-brands-instagram"></i>
  </a>
</div>

        <div className={style.contacto}>
          Telefono
        
          <span>32 23 4567 5432</span>
        </div>

      </div>

      <div className={style.email}>
        Envíanos un correo a: <br />
        <strong>AquaticWorld@gmail.com</strong>{" "}
        <i className="fi fi-sr-envelope"></i>
      </div>

    </footer>
  );
};

export default Footer;

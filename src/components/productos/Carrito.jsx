/* import style from './Carrito.module.css'
import { agregarACarrito } from '../../services/carrito.servoce'  
 */

const Carrito = ()=>{

      const [productos, setProductos] = useState([])
    
      const { token } = useAuth();
    
    const handleagregarCarrito = async (productoId) => {
      if (!token) {
        alert("Debes iniciar sesión para agregar a carrito ");
        return;
      }

    return (
   <>
   <section>
     <div> <h1><strong>" Tu Carrito "</strong></h1> </div>
   
   
   </section>

   <div>   </div>
   
   </>

)}


export default Carrito
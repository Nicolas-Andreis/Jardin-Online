import { useState } from "react";
import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import './CartItem.css';

const CartItem = ({ item, cantidad }) => {
    const { eliminarProducto } = useContext(CarritoContext);
    const [itemQuantity, setItemQuantity] = useState(cantidad);

    const incrementarCantidad = () => {
        console.log("Hiciste clic en incrementar");
        if (itemQuantity < 10) {
            setItemQuantity(itemQuantity + 1);
        }
    };

    const decrementarCantidad = () => {
        if (itemQuantity > 1) {
            setItemQuantity(itemQuantity - 1);
        }
    };

    return (
        <div className="cartitem">
            <img src={item.img} alt={item.nombre} className="imagen-cart" />
            <h4 className='poppins'>{item.nombre}</h4>
            <p  className='poppins'>Cantidad: {itemQuantity}</p>
            <p className='poppins'>Precio: {item.precio}</p>
            {/* <div className="container-buttons">
                <button onClick={decrementarCantidad} className="btn-res"> - </button>
                <button onClick={incrementarCantidad} className="btn-sum"> + </button>
            </div> */}
            <button onClick={() => eliminarProducto(item.id)} className="eliminarProducto poppins">X</button>
        </div>
    )
}

export default CartItem;
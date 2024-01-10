import { useState, useContext, useEffect } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import trash from "../../imagenes/iconos/icons8-trash-50.png"
import './CartItem.css';

const CartItem = ({ item, cantidad, onIncrementar, onDecrementar }) => {
    const { eliminarProducto, actualizarCarrito, actualizarTotal, agregarAlCarrito } = useContext(CarritoContext);
    const [itemQuantity, setItemQuantity] = useState(cantidad);

    const incrementarCantidad = () => {
        if (itemQuantity < 10) {
            const newQuantity = itemQuantity + 1;
            setItemQuantity(newQuantity);
            agregarAlCarrito(item, 1); // Llama a agregarAlCarrito con la cantidad actualizada
        }
    };

    const decrementarCantidad = () => {
        if (itemQuantity > 1) {
            const newQuantity = itemQuantity - 1;
            setItemQuantity(newQuantity);
            agregarAlCarrito(item, -1); // Llama a agregarAlCarrito con la cantidad actualizada
        }
    };

    const totalPrice = item.precio * itemQuantity;
    return (
        <div className="cartitem">
            <div>
                <img src={item.img} alt={item.nombre} className="imagen-cart" />
            </div>

            <div>
                <h4 className='poppins'>{item.nombre}</h4>
                <p className='poppins'>${item.precio}</p>
            </div>
            <div className="container-butons-general">
                <div className="container-buttons-cart">
                    <div className="container-count">
                        <button onClick={decrementarCantidad} className="btn-res"> - </button>
                        <p className='poppins'>{itemQuantity}</p>
                        <button onClick={incrementarCantidad} className="btn-sum"> + </button>
                    </div>
                    <p className="poppins total-precio">${totalPrice}</p>
                </div>
                <button onClick={() => eliminarProducto(item.id)} className="eliminarProducto poppins"><img src={trash} alt="" /></button>
            </div>

        </div>
    )
}

export default CartItem;
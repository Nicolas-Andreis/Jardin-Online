import { useState, useContext, useEffect } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import trash from "../../imagenes/iconos/icons8-trash-50.png"
import './CartItem.css';

const CartItem = ({ item, cantidad }) => {
    // Obtener funciones y datos del carrito desde el contexto
    const { eliminarProducto, agregarAlCarrito } = useContext(CarritoContext);
    
    // Estado local para la cantidad de productos de este ítem en el carrito
    const [itemQuantity, setItemQuantity] = useState(cantidad);

    // Incrementar la cantidad de productos en el carrito
    const incrementarCantidad = () => {
        if (itemQuantity < 10) {
            const newQuantity = itemQuantity + 1;
            setItemQuantity(newQuantity);
            agregarAlCarrito(item, 1); // Llama a agregarAlCarrito con la cantidad actualizada
        }
    };

    // Decrementar la cantidad de productos en el carrito
    const decrementarCantidad = () => {
        if (itemQuantity > 1) {
            const newQuantity = itemQuantity - 1;
            setItemQuantity(newQuantity);
            agregarAlCarrito(item, -1); // Llama a agregarAlCarrito con la cantidad actualizada
        }
    };

    // Calcular el precio total para este ítem
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
                    {/* Botones para incrementar y decrementar la cantidad de productos */}
                    <div className="container-count">
                        <button onClick={decrementarCantidad} className="btn-res"> - </button>
                        <p className='poppins'>{itemQuantity}</p>
                        <button onClick={incrementarCantidad} className="btn-sum"> + </button>
                    </div>
                    {/* Precio total para este ítem */}
                    <p className="poppins total-precio">${totalPrice}</p>
                </div>
                
                {/* Botón para eliminar este ítem del carrito */}
                <button onClick={() => eliminarProducto(item.id)} className="eliminarProducto poppins"><img src={trash} alt="" /></button>
            </div>
        </div>
    )
}

export default CartItem;
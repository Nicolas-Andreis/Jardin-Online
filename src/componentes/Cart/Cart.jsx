import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import './Cart.css';

const Cart = () => {
    const { carrito, vaciarCarrito, total, cantidadTotal, actualizarCarrito, actualizarTotal } = useContext(CarritoContext);

    // Función para incrementar la cantidad de un producto en el carrito
    const incrementarCantidad = (item) => {
        const updatedCart = carrito.map(producto => {
            if (producto.item.id === item.id) {
                return {
                    ...producto,
                    cantidad: producto.cantidad + 1
                };
            }
            return producto;
        });

        actualizarCarrito(updatedCart); // Actualizar el carrito con la cantidad actualizada
        actualizarTotal(total + item.precio); // Actualizar el total
    };

    // Función para decrementar la cantidad de un producto en el carrito
    const decrementarCantidad = (item) => {
        const updatedCart = carrito.map(producto => {
            if (producto.item.id === item.id) {
                return {
                    ...producto,
                    cantidad: producto.cantidad - 1
                };
            }
            return producto;
        });

        actualizarCarrito(updatedCart); // Actualizar el carrito con la cantidad actualizada
        actualizarTotal(total - item.precio); // Actualizar el total
    };

    // Si no hay productos en el carrito, mostrar un mensaje y un enlace para ver productos
    if (cantidadTotal === 0) {
        return (
            <div className="container-vacio">
                <h2 className='poppins'>Mi carrito</h2>
                <h2 className='poppins'>no hay productos en el carrito</h2>
                <Link to="/" className="verProductos poppins">Ver productos</Link>
            </div>
        )
    }

    return (
        <div className="container-compras">
            <h2 className='poppins'>Mi carrito</h2>

            {/* Mapear cada producto en el carrito a un componente CartItem */}
            {carrito.map((producto) => (
                <CartItem
                    key={producto.item.id}
                    item={producto.item} // Pasar el objeto 'item' directamente en lugar de desempaquetar props
                    cantidad={producto.cantidad} // Pasar 'cantidad' directamente en lugar de desempaquetar props
                    onIncrementar={incrementarCantidad}
                    onDecrementar={decrementarCantidad}
                />
            ))}

            {/* Botones para vaciar el carrito, finalizar la compra y mostrar el total */}
            <div className="containerbuttoncompras">
                <button onClick={() => vaciarCarrito() } className="vaciarCarrito poppins">
                    Vaciar carrito
                </button>
                <Link to="/checkout" className="finalizarcompra poppins">
                    Finalizar compra
                </Link>
                <div className="container-total">
                    <h3 className='poppins'>Total: $ {total}</h3>
                    <h3 className='poppins'>Cantidad total: {cantidadTotal}</h3>
                </div>
            </div>
        </div>
    );
}

export default Cart;
import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import './Cart.css';

const Cart = () => {
    const { carrito, vaciarCarrito, total, cantidadTotal } = useContext(CarritoContext);

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
            {carrito.map((producto) => (
                <CartItem
                    key={producto.item.id}
                    item={producto.item} // Pasar el objeto 'item' directamente en lugar de desempaquetar props
                    cantidad={producto.cantidad} // Pasar 'cantidad' directamente en lugar de desempaquetar props
                />
            ))}
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

export default Cart
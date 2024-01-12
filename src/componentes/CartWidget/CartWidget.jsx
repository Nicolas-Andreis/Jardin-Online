import React from 'react';
import Carrito from '../../imagenes/iconos/icons8-shopping-bag-50.png';
import './CartWidget.css';
import { useContext } from 'react';
import { CarritoContext } from '../../context/CarritoContext';
import { Link } from 'react-router-dom';

const CartWidget = ({ closeMenu }) => {
  // Obtener la cantidad total del carrito desde el contexto
  const { cantidadTotal } = useContext(CarritoContext);

  return (
    <div className='containercarrito' onClick={closeMenu}>
      {/* Enlace al carrito con un ícono de carrito de compras */}
      <Link to="/cart" className='link-cart'>
        <img src={Carrito} alt="" className='carrito' />

        {/* Mostrar el contador de productos en el carrito si la cantidad total es mayor que 0 */}
        {cantidadTotal > 0 && <p className='contador-widget'>{cantidadTotal}</p>}
      </Link>
    </div>
  );
}

export default CartWidget;
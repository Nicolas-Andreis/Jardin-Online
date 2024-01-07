import React from 'react';
import Carrito from '../../imagenes/iconos/icons8-shopping-bag-50.png';
import './CartWidget.css';
import { useContext } from 'react';
import { CarritoContext } from '../../context/CarritoContext';
import { Link } from 'react-router-dom';
const CartWidget = ({ closeMenu }) => {
  const {cantidadTotal} = useContext(CarritoContext);
  return (
    <div className='containercarrito' onClick={closeMenu}>
      <Link to="/cart">
      <img src={Carrito} alt="" className='carrito' />
      {
        cantidadTotal > 0 && <p className='contador-widget'>{cantidadTotal}</p>
      }
        {/* <p className='contador-widget'>1</p> */}
      </Link>
    </div>
  )
}

export default CartWidget
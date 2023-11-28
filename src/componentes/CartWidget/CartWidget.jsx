import React from 'react'
import Carrito from '../../imagenes/iconos/icons8-shopping-bag-50.png'
import './CartWidget.css'
const CartWidget = () => {
  return (
    <div className='containercarrito'>
        <img src={Carrito} alt="" className='carrito' />
        <p className='contador-widget'>1</p>
    </div>
  )
}

export default CartWidget
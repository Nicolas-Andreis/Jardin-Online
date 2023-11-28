import React from 'react'
import Logo from '../../imagenes/logo/logo.png'
import Carrito from '../../imagenes/iconos/icons8-shopping-bag-50.png'
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css'; 
const Navbar = () => {
  return (
    <nav>
        <div className='container-logo'>
        <img src={Logo} alt="" />
        <h2 className='poppins'>Jardin Online</h2>
        </div>
        <div className='container-list'>
            <ul className='poppins'>
                <li>home</li>
                <li>productos</li>
                <li>nosotros</li>
                <li>ubicación</li>
                <li><CartWidget/></li>
            </ul>
        </div>
        
    </nav>
  )
}

export default Navbar
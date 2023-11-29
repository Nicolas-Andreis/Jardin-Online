import React from 'react'
import Logo from '../../imagenes/logo/logo.png'
import Carrito from '../../imagenes/iconos/icons8-shopping-bag-50.png'
import CartWidget from '../CartWidget/CartWidget';
import Buscador from '../Buscador/Buscador';
import './NavBar.css'; 
const Navbar = () => {
  return (
    <nav>
        <div className='container-logo'>
        <img src={Logo} alt="" />
        <h2 className='poppins'>Jardin Online</h2>
        </div>
        <Buscador/>
        <div className='container-list'>
            <ul className='poppins'>
                <li className='active'>home</li>
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
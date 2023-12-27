import React from 'react'
import Logo from '../../imagenes/logo/logo.png'
import CartWidget from '../CartWidget/CartWidget';
import Buscador from '../Buscador/Buscador';
import './NavBar.css'; 
import { Link, NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav>
        <div className='container-logo'>
          <Link to="/" className='link'>
          <img src={Logo} alt="" />
        <h2 className='poppins'>Jardin Online</h2>
          </Link>
        </div>
        <Buscador/>
        <div className='container-list'>
            <ul className='poppins'>
                <li className='active'><NavLink to="/" className='link'>home</NavLink></li>
                <li><NavLink to="/productos" className='link'>productos</NavLink></li>
                <li><NavLink to="/nosotros" className='link'>nosotros</NavLink></li>
                <li><NavLink to="/ubicación" className='link'>ubicación</NavLink></li>
                <li><CartWidget/></li>
            </ul>
        </div>
        <div className='nav_toggle'>
          <span></span>
          <span></span>
          <span></span>
        </div>
        
    </nav>
  )
}

export default Navbar
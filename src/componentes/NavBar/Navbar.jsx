import React from 'react'
import Logo from '../../imagenes/logo/logo.png'
import CartWidget from '../CartWidget/CartWidget';
import Buscador from '../Buscador/Buscador';
import './NavBar.css';
import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav>
      <div className='container-logo'>
        <Link to="/" className='link'>
          <img src={Logo} alt="" />
          <h2 className='poppins titulo-mobile'>Jardin Online</h2>
        </Link>
      </div>
      <Buscador categorias={["bases", "macetas", "plantas", "semillas"]} onBuscar={(valor, coincidencias) => console.log(valor, coincidencias)} />
      <div className='container-list'>
        <ul className={` poppins nav_items ${isOpen && "open"}`}>
          <li><NavLink to="/" className='link' onClick={closeMenu}>home</NavLink></li>
          <li><NavLink to="/productos" className='link' onClick={closeMenu}>productos</NavLink></li>
          <li><NavLink to="/nosotros" className='link' onClick={closeMenu}>nosotros</NavLink></li>
          <li><NavLink to="/misOrdenes" className='link' onClick={closeMenu}>mis ordenes</NavLink></li>
          <li onClick={closeMenu}><div><CartWidget /></div></li>
        </ul>
      </div>
      <div className={`nav_toggle ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)} >
        <span></span>
        <span></span>
        <span></span>
      </div>

    </nav>
  )
}

export default Navbar
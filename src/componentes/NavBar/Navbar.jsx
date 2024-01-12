import React from 'react';
import Logo from '../../imagenes/logo/logo.png';
import CartWidget from '../CartWidget/CartWidget';
import Buscador from '../Buscador/Buscador';
import './NavBar.css';
import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';

// Creamos el componente funcional Navbar
const Navbar = () => {
  // Utilizamos el estado para manejar si el menú está abierto o cerrado
  const [isOpen, setIsOpen] = useState(false);

  // Función para alternar entre abrir y cerrar el menú
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Función para cerrar el menú
  const closeMenu = () => {
    setIsOpen(false);
  };

  // Retornamos el contenido del Navbar
  return (
    <nav>
      {/* Contenedor del logo */}
      <div className='container-logo'>
        {/* Enlace al inicio */}
        <Link to="/" className='link'>
          {/* Imagen del logo */}
          <img src={Logo} alt="" />
          {/* Título para dispositivos móviles */}
          <h2 className='poppins titulo-mobile'>Jardin Online</h2>
        </Link>
      </div>

      {/* Componente Buscador con lista de categorías y función de búsqueda */}
      <Buscador categorias={["bases", "macetas", "plantas", "semillas"]} onBuscar={(valor, coincidencias) => console.log(valor, coincidencias)} />

      {/* Contenedor de la lista de navegación */}
      <div className='container-list'>
        {/* Lista de navegación con NavLink para gestionar la navegación y cerrar el menú al hacer clic */}
        <ul className={`poppins nav_items ${isOpen && "open"}`}>
          <li><NavLink to="/" className='link' onClick={closeMenu}>home</NavLink></li>
          <li><NavLink to="/productos" className='link' onClick={closeMenu}>productos</NavLink></li>
          <li><NavLink to="/nosotros" className='link' onClick={closeMenu}>nosotros</NavLink></li>
          <li><NavLink to="/misOrdenes" className='link' onClick={closeMenu}>mis órdenes</NavLink></li>
          {/* Icono del carrito que muestra el componente CartWidget */}
          <li onClick={closeMenu}><div><CartWidget /></div></li>
        </ul>
      </div>

      {/* Botón de alternar para abrir/cerrar el menú en dispositivos móviles */}
      <div className={`nav_toggle ${isOpen && "open"}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}

// Exportamos el componente Navbar para su uso en otros archivos
export default Navbar;
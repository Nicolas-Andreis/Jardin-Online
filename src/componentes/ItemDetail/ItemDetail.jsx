import React, { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import './ItemDetail.css';
import { CarritoContext } from '../../context/CarritoContext';
import { useContext } from 'react';

const ItemDetail = ({ id, nombre, stock, precio, img, descripción }) => {
  const [agregaCantidad, setAgregarCantidad] = useState(0);
  const { agregarAlCarrito } = useContext(CarritoContext);

  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);

    const item = { id, nombre, precio, img };
    agregarAlCarrito(item, cantidad);
  };

  return (
    <div className='containerDetail'>
      <div className='cardDetail'>
        <div className='container-close'>
          <Link to="/productos" className='buttonClose poppins'>
            x
          </Link>
          <img src={img} alt={nombre} />
        </div>
        <h2 className='poppins'>Nombre: {nombre}</h2>
        <p className='poppins'>Precio: {precio}</p>
        <p className='poppins'>Id: {id}</p>
        <p className='poppins'>{descripción}</p>

        {stock > 0 ? (
          agregaCantidad > 0 ? (
            <Link to="/cart" className='terminarCompra poppins'>
              Terminar compra
            </Link>
          ) : (
            <ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />
          )
        ) : (
          <p className='sinStock poppins'>Sin stock</p>
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
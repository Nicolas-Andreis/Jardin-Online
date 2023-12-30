// ItemDetail.jsx
import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './ItemDetail.css';

const ItemDetail = ({id, nombre, stock, precio, img, descripción}) => {
  const [agregaCantidad, setAgregarCantidad] = useState(0);

  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);
    console.log("Productos agregados: " + cantidad);
  }

  return (
    <div className='containerDetail'>
      <div className='cardDetail'>
        <img src={img} alt={nombre}/>
        <h2>Nombre: {nombre}</h2>
        <p>Precio: {precio}</p>
        <p>Id: {id}</p>
        <p>{descripción}</p>
        
        {
          agregaCantidad > 0 ? (
            <Link to="/cart" className='terminarCompra'>Terminar compra</Link>
          ) : (
            <ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />
          )
        }
      </div>
    </div>
  )
}

export default ItemDetail;
// ItemDetail.jsx
import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './ItemDetail.css';
import ItemList from '../ItemList/ItemList';

//importamos el carrito context
import { CarritoContext } from '../../context/CarritoContext';

//importamos el hook useContext
import { useContext } from 'react';

const ItemDetail = ({id, nombre, stock, precio, img, descripción}) => {
  const [agregaCantidad, setAgregarCantidad] = useState(0);

  // cambios en la clase 6: 

  const {agregarAlCarrito} = useContext(CarritoContext);

  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);

    //y ahora aca voy a crear un objeto con el item y la cantidad:
    const item = {id, nombre, precio, img};
    agregarAlCarrito(item, cantidad);
  }

  return (
    <div className='containerDetail'>
      <div className='cardDetail'>
        <div className='container-close'>
          <Link to="/productos" className='buttonClose poppins'>x</Link>
          <img src={img} alt={nombre}/>
        </div>
        <h2 className='poppins'>Nombre: {nombre}</h2>
        <p className='poppins'>Precio: {precio}</p>
        <p className='poppins'>Id: {id}</p>
        <p className='poppins'>{descripción}</p>
        
        {
          agregaCantidad > 0 ? (
            <Link to="/cart" className='terminarCompra poppins' >Terminar compra</Link>
          ) : (
            <ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />
          )
        }
      </div>
    </div>
  )
}

export default ItemDetail;
import React from 'react'
import './ItemDetail.css';

const ItemDetail = ({id, nombre, precio, img}) => {
  return (
    <div className='containerDetail'>
      <div className='cardDetail'>
      <img src={img} alt={nombre}/>
      <h2>Nombre: {nombre}</h2>
        <p>Precio: {precio}</p>
        <p>Id: {id}</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, molestias aut iure molestiae facere suscipit iste enim vero odio dolorem qui quaerat nemo deserunt iusto accusantium ipsum ab unde facilis?</p>
      </div>
    </div>
  )
}

export default ItemDetail
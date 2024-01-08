import React from 'react'
import { Link } from 'react-router-dom'


const Item = ({id, nombre, stock, precio, img}) => {
  return (
    <div>
        <img src={img} alt={nombre} />
        <h3>nombre:{nombre}</h3>
        <p>precio: {precio}</p>
        <p>id: {id}</p>
        <p>STOCK: {stock}</p>
        <Link to={`/item/${id}`}>ver detalles</Link>
    </div>
  )
}

export default Item
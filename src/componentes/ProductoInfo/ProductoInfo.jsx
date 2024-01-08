import React from 'react'
import './ProductoInfo.css'
const ProductoInfo = ({ nombre, precio, stock, categoria}) => {
  return (
    <div className='info'>
        <h2>{nombre}</h2>
        <p>Categoria: <strong>{categoria}</strong></p>
        <p className='precio'>${precio}</p>
        <p>Stock: {stock}</p>
    </div>
  )
}

export default ProductoInfo
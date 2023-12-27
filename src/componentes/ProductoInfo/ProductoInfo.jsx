import React from 'react'
import './ProductoInfo.css'
const ProductoInfo = ({ nombre, precio, categoria}) => {
  return (
    <div className='info'>
        <h2>{nombre}</h2>
        <p>Categoria: <strong>{categoria}</strong></p>
        <p className='precio'>${precio}</p>
    </div>
  )
}

export default ProductoInfo
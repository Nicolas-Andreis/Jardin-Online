import React from 'react'
import './ProductoImagen.css'

const ProductoImagen = ({ nombre, img}) => {
  return (
    <img className='img' src= {img} alt={nombre} />
  )
}

export default ProductoImagen
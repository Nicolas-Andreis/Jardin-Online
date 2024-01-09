import React from 'react'
import './ProductoImagen.css'
const ProductoImagen = ({ nombre, img}) => {
  console.log(img);
  const imageUrl= "./imagenes/plantas/cereus-cactus-olla.jpg"
  return (
    <img className='img' src={img}  alt={nombre} />
  )
}

export default ProductoImagen
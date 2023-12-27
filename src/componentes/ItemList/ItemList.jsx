import React from 'react'
import ProductoCard from '../ProductoCard/ProductoCard'
const ItemList = ({productos}) => {
  return (
    <div className='container-productos'>
        {
            productos.map(producto => <ProductoCard key={producto.id} {...producto}/>)
        }
    </div>
  )
}

export default ItemList
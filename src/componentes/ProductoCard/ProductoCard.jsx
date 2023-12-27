import React from 'react'
import ProductoBoton from '../ProductoBoton/ProductoBoton';
import ProductoImagen from '../ProductoImagen/ProductoImagen';
import ProductoInfo from '../ProductoInfo/ProductoInfo';
import './ProductoCard.css'; 
import { Link } from 'react-router-dom';

const ProductoCard = ({ id, nombre, precio, img, categoria }) => {
    return (
        <div className='card poppins'>
            <ProductoImagen img={img} />
            <ProductoInfo nombre={nombre} precio={precio} categoria={categoria}/>
            <ProductoBoton id={id} />
            <Link to={`/item/${id}`} className='link'><button className='btn-ver'>ver más</button></Link>
            
        </div>
    )
}

export default ProductoCard
// Importamos React, los componentes ProductoImagen y ProductoInfo, y el archivo de estilos
import React from 'react';
import ProductoImagen from '../ProductoImagen/ProductoImagen';
import ProductoInfo from '../ProductoInfo/ProductoInfo';
import './ProductoCard.css'; 
import { Link } from 'react-router-dom';

// Creamos el componente funcional ProductoCard que recibe propiedades como argumentos
const ProductoCard = ({ id, nombre, precio, img, categoria, stock }) => {
    return (
        // Renderizamos el componente ProductoCard con la clase CSS 'card' y la fuente 'poppins'
        <div className='card poppins'>
            {/* Renderizamos el componente ProductoImagen y le pasamos las propiedades 'img' y 'nombre' */}
            <ProductoImagen img={img} />
            {/* Renderizamos el componente ProductoInfo y le pasamos las propiedades 'nombre', 'precio', 'categoria', y 'stock' */}
            <ProductoInfo nombre={nombre} precio={precio} categoria={categoria} stock={stock}/>
            {/* Creamos un enlace que redirige a la página de detalles del producto */}
            <Link to={`/item/${id}`} className='link'><button className='btn-ver'>ver más</button></Link>
        </div>
    );
}

// Exportamos el componente para su uso en otros archivos
export default ProductoCard;
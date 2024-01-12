// Importamos React y el archivo de estilos
import React from 'react';
import './ProductoImagen.css';

// Creamos un componente funcional ProductoImagen que recibe propiedades como argumentos
const ProductoImagen = ({ nombre, img }) => {
    return (
        // Renderizamos la imagen del producto con la clase CSS 'img'
        <img className='img' src={img} alt={nombre} />
    );
}

// Exportamos el componente para su uso en otros archivos
export default ProductoImagen;
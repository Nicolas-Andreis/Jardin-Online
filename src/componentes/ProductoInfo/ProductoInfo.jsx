// Importamos React y el archivo de estilos
import React from 'react';
import './ProductoInfo.css';

// Creamos un componente funcional ProductoInfo que recibe propiedades como argumentos
const ProductoInfo = ({ nombre, precio, stock, categoria }) => {
    return (
        // Renderizamos la información del producto dentro de un contenedor con la clase 'info'
        <div className='info'>
            <h2>{nombre}</h2>
            <p>Categoría: <strong>{categoria}</strong></p>
            <p className='precio'>${precio}</p>
            <p>Stock: {stock}</p>
        </div>
    );
}

// Exportamos el componente para su uso en otros archivos
export default ProductoInfo;
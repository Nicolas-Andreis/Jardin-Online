// Importamos el hook `useOrder` del contexto `MisOrdenesContext`
import { useOrder } from '../../context/MisOrdenesContext';
import React, { useState } from 'react';
import ItemOrder from '../ItemOrder/ItemOrder'; // Importamos el componente `ItemOrder`
import './MisOrdenes.css';

// Definimos el componente funcional `MisOrdenes`
const MisOrdenes = () => {
    // Utilizamos el hook `useOrder` para obtener el estado y funciones relacionadas con las órdenes
    const { MisOrdenes, clearOrderHistory } = useOrder();
    
    // Utilizamos el estado local `selectedOrderId` para gestionar la visualización de detalles de una orden seleccionada
    const [selectedOrderId, setSelectedOrderId] = useState(null);

    // Función para manejar el clic en un botón de orden y alternar la visibilidad de sus detalles
    const handleButtonClick = (orderId) => {
        // Cambiamos el `selectedOrderId` al ID de la orden clicada
        setSelectedOrderId(selectedOrderId === orderId ? null : orderId);
    };

    // Función para manejar el clic en el botón de borrar historial
    const handleClearHistory = () => {
        // Llamamos a la función `clearOrderHistory` para eliminar el historial de órdenes
        clearOrderHistory();
        // También puedes realizar otras acciones después de borrar el historial si es necesario
    };

    // Verificamos si no hay órdenes
    if (MisOrdenes.length === 0) {
        // Mostramos un mensaje indicando que no hay órdenes
        return (
            <div className="container-vacio">
                <h2 className='poppins'>Mis Órdenes</h2>
                <h2 className='poppins'>No hay órdenes</h2>
            </div>
        );
    }

    // Renderizamos el componente MisOrdenes
    return (
        <div>
            <h2 className='poppins misordertitle'>Mis Órdenes</h2>
            {/* Contenedor de las órdenes */}
            <div className='container-orders'>
                {/* Mapeamos las órdenes y mostramos un botón para cada una */}
                {MisOrdenes.map(orderId => (
                    <button className='btn-order poppins' key={orderId} onClick={() => handleButtonClick(orderId)}>
                        Orden ID: {orderId}
                        {/* Mostramos los detalles de la orden si el ID coincide con `selectedOrderId` */}
                        {selectedOrderId === orderId && <ItemOrder orderId={orderId} showDetailsByDefault />}
                    </button>
                ))}
                {/* Botón para borrar el historial de órdenes */}
                <button className='btn-borrar-historial' onClick={handleClearHistory}>Borrar historial</button>
            </div>
        </div>
    );
};

// Exportamos el componente MisOrdenes para su uso en otros archivos
export default MisOrdenes;
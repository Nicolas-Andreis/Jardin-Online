// MisOrdenes.jsx
import { useOrder } from '../../context/MisOrdenesContext';
import React, { useState } from 'react';
import ItemOrder from '../ItemOrder/ItemOrder';
import './MisOrdenes.css';

const MisOrdenes = () => {
    const { MisOrdenes, clearOrderHistory } = useOrder();
    const [selectedOrderId, setSelectedOrderId] = useState(null);

    const handleButtonClick = (orderId) => {
        setSelectedOrderId(selectedOrderId === orderId ? null : orderId);
    };

    const handleClearHistory = () => {
        clearOrderHistory();
        // También puedes realizar otras acciones después de borrar el historial si es necesario
    };

    if (MisOrdenes.length === 0) {
        return (
            <div className="container-vacio">
                <h2 className='poppins'>Mis Órdenes</h2>
                <h2 className='poppins'>No hay órdenes</h2>
            </div>
        );
    }

    return (
        <div>
            <h2 className='poppins misordertitle'>Mis Órdenes</h2>
            <div className='container-orders'>
                {MisOrdenes.map(orderId => (
                    <button className='btn-order poppins' key={orderId} onClick={() => handleButtonClick(orderId)}>
                        Orden ID: {orderId}
                        {selectedOrderId === orderId && <ItemOrder orderId={orderId} showDetailsByDefault />}
                    </button>
                ))}
                <button className='btn-borrar-historial' onClick={handleClearHistory}>Borrar historial</button>
            </div>
            
        </div>
    );
};

export default MisOrdenes;
// ItemOrder.jsx
import { useOrder } from '../../context/MisOrdenesContext';
import React, { useState, useEffect } from 'react';
import { db } from '../../services/config';
import { doc, getDoc } from 'firebase/firestore';
import './ItemOrder.css'

const ItemOrder = ({ orderId, showDetailsByDefault }) => {
    const [orderDetails, setOrderDetails] = useState(null);
    const [showDetails, setShowDetails] = useState(showDetailsByDefault);

    const fetchOrderDetails = async () => {
        try {
            const orderRef = doc(db, 'ordenes', orderId);
            const orderDoc = await getDoc(orderRef);

            if (orderDoc.exists()) {
                setOrderDetails(orderDoc.data());
            } else {
                console.log(`No se encontró la orden con el ID ${orderId}`);
            }
        } catch (error) {
            console.error(`Error al obtener los detalles de la orden con ID ${orderId}:`, error);
        }
    };

    const handleClick = () => {
        if (!orderDetails) {
            fetchOrderDetails();
        }
        setShowDetails(!showDetails);
    };

    useEffect(() => {
        if (orderId && !orderDetails && showDetailsByDefault) {
            fetchOrderDetails();
        }
    }, [orderId, orderDetails, showDetailsByDefault]);

    return (
        <div>
            {orderId && (
                <div>
                    <h3>Orden ID: {orderId}</h3>
                    {showDetails && orderDetails && (
                        <div>
                            <p>Fecha: {orderDetails.fecha.toDate().toLocaleDateString()}</p>
                            <p>Hora: {orderDetails.fecha.toDate().toLocaleTimeString()}</p>
                            <p>Total de la compra: ${orderDetails.total}</p>
                            
                            <p className='poppins'>Detalles de los productos:</p>
                            <ul>
                                {orderDetails.items.map(item => (
                                    <li className='item-order-li' key={item.id}>
                                        <p>Producto: {item.nombre}</p>
                                        <p>Cantidad: {item.cantidad}</p>
                                        
                                        {/* Agrega más detalles según la estructura de tus datos de productos */}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default ItemOrder;
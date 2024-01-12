// Importamos React, useState y useEffect desde React
import React, { useState, useEffect } from 'react';
// Importamos los elementos necesarios para interactuar con Firebase Firestore
import { db } from '../../services/config';
import { doc, getDoc } from 'firebase/firestore';
// Importamos la imagen del logo
import logo from "../../imagenes/logo/logo.png"
// Importamos los estilos del componente
import './ItemOrder.css'

// Definimos el componente funcional ItemOrder
const ItemOrder = ({ orderId, showDetailsByDefault }) => {
    // Definimos estados locales para almacenar los detalles de la orden y controlar la visibilidad de los detalles
    const [orderDetails, setOrderDetails] = useState(null);
    const [showDetails, setShowDetails] = useState(showDetailsByDefault);

    // Función asincrónica para obtener los detalles de la orden desde Firebase Firestore
    const fetchOrderDetails = async () => {
        try {
            // Creamos una referencia al documento de la orden en Firestore
            const orderRef = doc(db, 'ordenes', orderId);
            // Obtenemos el documento de la orden
            const orderDoc = await getDoc(orderRef);

            // Verificamos si la orden existe en Firestore
            if (orderDoc.exists()) {
                // Almacenamos los detalles de la orden en el estado local
                setOrderDetails(orderDoc.data());
            } else {
                console.log(`No se encontró la orden con el ID ${orderId}`);
            }
        } catch (error) {
            console.error(`Error al obtener los detalles de la orden con ID ${orderId}:`, error);
        }
    };

    // Función para manejar el clic en el botón de detalles
    const handleClick = () => {
        // Si aún no se han cargado los detalles de la orden, los obtenemos
        if (!orderDetails) {
            fetchOrderDetails();
        }
        // Alternamos la visibilidad de los detalles
        setShowDetails(!showDetails);
    };

    // Efecto que se ejecuta cuando cambia el orderId, orderDetails o showDetailsByDefault
    useEffect(() => {
        // Si hay un orderId y aún no se han cargado los detalles, y showDetailsByDefault es verdadero, obtenemos los detalles
        if (orderId && !orderDetails && showDetailsByDefault) {
            fetchOrderDetails();
        }
    }, [orderId, orderDetails, showDetailsByDefault]);

    // Renderizamos el componente ItemOrder
    return (
        <div>
            {/* Verificamos si hay un orderId */}
            {orderId && (
                <div>
                    {/* Sección de encabezado con el logo y el nombre de la tienda */}
                    <div className='flex dotted'>
                        <img src={logo} alt="jardin-online" className='logo-ticket' />
                        <h3>Jardín Online</h3>
                    </div>
                    {/* Mostramos el ID de la orden */}
                    <h3 className='dotted'>Orden ID: {orderId}</h3>
                    {/* Verificamos si se deben mostrar los detalles y si existen detalles de la orden */}
                    {showDetails && orderDetails && (
                        <div>
                            {/* Sección de fecha con la fecha y hora de la orden */}
                            <div className='container-fecha dotted'>
                                <p>{orderDetails.fecha.toDate().toLocaleDateString()}</p>
                                <p>{orderDetails.fecha.toDate().toLocaleTimeString()}</p>
                            </div>
                            {/* Lista de productos con sus cantidades */}
                            <ul className='ul-productos dotted'>
                                {/* Mapeamos los items de la orden */}
                                {orderDetails.items.map(item => (
                                    <li className='item-order-li' key={item.id}>
                                        <p>{item.nombre}</p>
                                        <p>X {item.cantidad}</p>
                                        {/* Agrega más detalles según la estructura de tus datos de productos */}
                                    </li>
                                ))}
                            </ul>
                            {/* Total de la compra */}
                            <p className='bold total'>Total de la compra: ${orderDetails.total}</p>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

// Exportamos el componente ItemOrder para su uso en otros archivos
export default ItemOrder;

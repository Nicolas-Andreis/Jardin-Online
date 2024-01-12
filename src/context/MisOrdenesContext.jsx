import { createContext, useContext, useState, useEffect } from 'react';

// Creamos un contexto para el historial de órdenes
export const OrderContext = createContext({
    // Estado inicial del historial de órdenes
    MisOrdenes: [],
    // Función para agregar una nueva orden al historial
    agregarAMisOrdenes: () => { },
    // Función para limpiar el historial de órdenes
    clearOrderHistory: () => { },
});

// Proveedor del contexto de órdenes
export const OrderProvider = ({ children }) => {
    // Estado local para almacenar el ID de la orden actual
    const [orderId, setOrderId] = useState(null);

    // Estado local para almacenar el historial de órdenes
    const [MisOrdenes, setMisOrdenes] = useState(() => {
        // Cargar el historial de órdenes desde el localStorage al inicio
        const storedMisOrdenes = localStorage.getItem('MisOrdenes');
        return storedMisOrdenes ? JSON.parse(storedMisOrdenes) : [];
    });

    // Función para agregar una nueva orden al historial
    const agregarAMisOrdenes = (nuevoOrderId) => {
        setMisOrdenes([...MisOrdenes, nuevoOrderId]);
    };

    // Efecto para guardar el historial de órdenes en el localStorage cada vez que cambie
    useEffect(() => {
        localStorage.setItem('MisOrdenes', JSON.stringify(MisOrdenes));
    }, [MisOrdenes]);

    // Función para limpiar el historial de órdenes
    const clearOrderHistory = () => {
        Swal.fire({
            title: "¿Estás seguro?",
            text: "Eliminarás tu historial de órdenes",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Eliminar",
            cancelButtonText: "Conservar"
        }).then((result) => {
            if (result.isConfirmed) {
                // Borra el historial del localStorage
                localStorage.removeItem('MisOrdenes');
                // Limpia el estado en el contexto
                setMisOrdenes([]);
                Swal.fire({
                    title: "Borradas",
                    text: "Tus órdenes se eliminaron",
                    icon: "error"
                });
            }
        });
    };

    // Valor proporcionado por el contexto
    const contextValue = {
        orderId,
        setOrderId,
        MisOrdenes,
        agregarAMisOrdenes,
        clearOrderHistory,
    };

    // Renderizamos el proveedor del contexto con su valor y los componentes hijos
    return (
        <OrderContext.Provider value={contextValue}>
            {children}
        </OrderContext.Provider>
    );
};

// Hook personalizado para acceder al contexto de órdenes
export const useOrder = () => {
    return useContext(OrderContext);
};
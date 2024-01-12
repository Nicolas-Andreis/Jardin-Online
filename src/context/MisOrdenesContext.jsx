import { createContext, useContext, useState, useEffect } from 'react';

export const OrderContext = createContext({
    MisOrdenes: [],
    agregarAMisOrdenes: () => { },
    clearOrderHistory: () => { },
});

export const OrderProvider = ({ children }) => {
    const [orderId, setOrderId] = useState(null);
    const [MisOrdenes, setMisOrdenes] = useState(() => {
        // Cargar MisOrdenes desde el localStorage al inicio
        const storedMisOrdenes = localStorage.getItem('MisOrdenes');
        return storedMisOrdenes ? JSON.parse(storedMisOrdenes) : [];
    });

    const agregarAMisOrdenes = (nuevoOrderId) => {
        setMisOrdenes([...MisOrdenes, nuevoOrderId]);
    };


    // Guardar MisOrdenes en el localStorage cada vez que cambie
    useEffect(() => {
        localStorage.setItem('MisOrdenes', JSON.stringify(MisOrdenes));
    }, [MisOrdenes]);

    const clearOrderHistory = () => {
        Swal.fire({
            title: "Estas seguro?",
            text: "Eliminaras tu historial de ordenes",
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
                    text: "Tus ordenes se eliminaron",
                    icon: "error"
                });
            }
        });

    };

    return (
        <OrderContext.Provider value={{ orderId, setOrderId, MisOrdenes, agregarAMisOrdenes, clearOrderHistory }}>
            {children}
        </OrderContext.Provider>
    );
};

export const useOrder = () => {
    return useContext(OrderContext);
};
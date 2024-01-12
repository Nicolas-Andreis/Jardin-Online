// Importamos los hooks y funciones necesarios
import { useState, createContext, useEffect } from "react";

// Creamos el contexto para el carrito de compras
export const CarritoContext = createContext({
    carrito: [],
    total: 0,
    cantidadTotal: 0,
    agregarAlCarrito: () => { },
    eliminarProducto: () => { },
    vaciarCarrito: () => { },
    vaciarCarrito2: () => { },
});

// Proveedor del contexto de carrito
export const CarritoProvider = ({ children }) => {
    // Estados locales para el carrito, total y cantidad total
    const [carrito, setCarrito] = useState(() => {
        const carritoGuardado = JSON.parse(localStorage.getItem("carrito")) || [];
        return carritoGuardado;
    });
    const [total, setTotal] = useState(() => {
        const totalGuardado = parseFloat(localStorage.getItem("total")) || 0;
        return totalGuardado;
    });
    const [cantidadTotal, setCantidadTotal] = useState(() => {
        const cantidadTotalGuardada = parseInt(localStorage.getItem("cantidadTotal")) || 0;
        return cantidadTotalGuardada;
    });

    // Cargar datos del localStorage al estado del carrito al montar el componente
    useEffect(() => {
        const carritoGuardado = JSON.parse(localStorage.getItem("carrito")) || [];
        const totalGuardado = parseFloat(localStorage.getItem("total")) || 0;
        const cantidadTotalGuardada = parseInt(localStorage.getItem("cantidadTotal")) || 0;

        setCarrito(carritoGuardado);
        setTotal(totalGuardado);
        setCantidadTotal(cantidadTotalGuardada);
    }, []);

    // Guardar datos en el localStorage cada vez que cambia el estado del carrito
    useEffect(() => {
        localStorage.setItem("carrito", JSON.stringify(carrito));
        localStorage.setItem("total", total.toString());
        localStorage.setItem("cantidadTotal", cantidadTotal.toString());
    }, [carrito, total, cantidadTotal]);

    // Función para agregar un producto al carrito
    const agregarAlCarrito = (item, cantidad) => {
        // Verificar si el producto ya está en el carrito
        const productoExistente = carrito.find(prod => prod.item.id === item.id);

        if (!productoExistente) {
            // Si no existe, agregar el nuevo producto al carrito
            setCarrito(prev => [...prev, { item, cantidad }]);
            setCantidadTotal(prev => prev + cantidad);
            setTotal(prev => prev + (item.precio * cantidad));
        } else {
            // Si ya existe, actualizar la cantidad del producto existente en el carrito
            const carritoActualizado = carrito.map(prod => {
                if (prod.item.id === item.id) {
                    return { ...prod, cantidad: prod.cantidad + cantidad };
                } else {
                    return prod;
                }
            })
            setCarrito(carritoActualizado);
            setCantidadTotal(prev => prev + cantidad);
            setTotal(prev => prev + (item.precio * cantidad));
        }
    }

    // Función para eliminar un producto del carrito
    const eliminarProducto = (id) => {
        // Encontrar el producto a eliminar en el carrito
        const productoEliminado = carrito.find(prod => prod.item.id === id);
        // Filtrar el carrito para excluir el producto a eliminar
        const carritoActualizado = carrito.filter(prod => prod.item.id !== id);

        // Actualizar los estados y guardar en el localStorage
        setCarrito(carritoActualizado);
        setCantidadTotal(prev => prev - productoEliminado.cantidad);
        setTotal(prev => prev - (productoEliminado.item.precio * productoEliminado.cantidad));
    }

    // Función para vaciar completamente el carrito con confirmación
    const vaciarCarrito = () => {
        Swal.fire({
            title: "Estás seguro?",
            text: "Eliminarás todos tus productos del carrito",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Eliminar",
            cancelButtonText: "Conservar"
        }).then((result) => {
            if (result.isConfirmed) {
                // Limpiar el carrito, actualizar estados y guardar en el localStorage
                setCarrito([]);
                setCantidadTotal(0);
                setTotal(0);
                localStorage.removeItem('carrito');
                localStorage.removeItem('total');
                localStorage.removeItem('cantidadTotal');
                Swal.fire({
                    title: "Borrados",
                    text: "Tus productos se eliminaron",
                    icon: "error"
                });
            }
        });
    }

    // Función para vaciar el carrito sin confirmación
    const vaciarCarrito2 = () => {
        // Limpiar el carrito, actualizar estados y guardar en el localStorage
        setCarrito([]);
        setCantidadTotal(0);
        setTotal(0);
        localStorage.removeItem('carrito');
        localStorage.removeItem('total');
        localStorage.removeItem('cantidadTotal');
    }

    // Renderizamos el proveedor del contexto con su valor y los componentes hijos
    return (
        <CarritoContext.Provider value={{ carrito, total, cantidadTotal, agregarAlCarrito, eliminarProducto, vaciarCarrito, vaciarCarrito2 }}>
            {children}
        </CarritoContext.Provider>
    );
}
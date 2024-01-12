//1) Voy a importar useState y createContext que me permite crear un contexto que almacenará toda la logica de mi carrillo de compras. 

import { useState, createContext, useEffect } from "react";

//2)Creamos el context: 
export const CarritoContext = createContext({
    carrito: [],
    total: 0,
    cantidadTotal: 0
});

export const CarritoProvider = ({ children }) => {
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

    const guardarEnLocalStorage = () => {
        // Guardar datos en el localStorage
        localStorage.setItem('carrito', JSON.stringify(carrito));
        localStorage.setItem('total', total.toString());
        localStorage.setItem('cantidadTotal', cantidadTotal.toString());
    };
    //Agregamos algunas funciones para lo lógica del carrito: 

    const agregarAlCarrito = (item, cantidad) => {
        const productoExistente = carrito.find(prod => prod.item.id === item.id);

        if (!productoExistente) {
            setCarrito(prev => [...prev, { item, cantidad }]);
            setCantidadTotal(prev => prev + cantidad);
            setTotal(prev => prev + (item.precio * cantidad));
            //La sintaxis: prev => [...prev, {item, cantidad}] se utiliza para crear un nuevo array a partir del estado anterior del carrito y agregar un nuevo objeto que representa el producto agregado. 
        } else {
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
            guardarEnLocalStorage();
        }
    }

    //Funcion para eliminar un producto: 

    const eliminarProducto = (id) => {
        Swal.fire({
            title: "Estas seguro?",
            text: "Eliminaras este producto",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Eliminar",
            cancelButtonText: "Cancelar",
        }).then((result) => {
            if (result.isConfirmed) {
                const productoEliminado = carrito.find(prod => prod.item.id === id);
                const carritoActualizado = carrito.filter(prod => prod.item.id !== id);


                setCarrito(carritoActualizado);
                setCantidadTotal(prev => prev - productoEliminado.cantidad);
                setTotal(prev => prev - (productoEliminado.item.precio * productoEliminado.cantidad));
                guardarEnLocalStorage();
                Swal.fire({
                    title: "Eliminado",
                    text: "Eliminaste este producto",
                    icon: "error"
                });
            }
        });


    }
    const vaciarCarrito2 = () => {
        setCarrito([]);
        setCantidadTotal(0);
        setTotal(0);
        guardarEnLocalStorage();
    }

    const vaciarCarrito = () => {
        Swal.fire({
            title: "Estas seguro?",
            text: "Eliminaras todos tus productos del carrito",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Eliminar",
            cancelButtonText: "Conservar"
        }).then((result) => {
            if (result.isConfirmed) {
                setCarrito([]);
                setCantidadTotal(0);
                setTotal(0);
                // Limpiar el localStorage
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

    return (
        <CarritoContext.Provider value={{ carrito, total, cantidadTotal, agregarAlCarrito, eliminarProducto, vaciarCarrito, vaciarCarrito2 }}>
            {children}
        </CarritoContext.Provider>
    )
}

//en el value enviamos el valor actual del carrito, los items, el total de la compra y las funciones de agregar, eliminar y vaciar carrito. 
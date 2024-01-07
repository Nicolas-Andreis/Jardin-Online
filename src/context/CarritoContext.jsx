import { useState, createContext } from "react";

export const CarritoContext = createContext({
    carrito: [],
    total: 0,
    cantidadTotal: 0
});

export const CarritoProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([]);
    const [total, setTotal] = useState(0);
    const [cantidadTotal, setCantidadTotal] = useState(0);

    const agregarAlCarrito = (item, cantidad) => {
        if (typeof item.precio !== 'number' || isNaN(item.precio)) {
            console.error("El precio del artículo no es un número válido:", item.precio);
            return;
        }

        if (typeof cantidad !== 'number' || isNaN(cantidad)) {
            console.error("La cantidad no es un número válido:", cantidad);
            return;
        }

        const productoExistente = carrito.find(prod => prod.item.id === item.id);

        if (!productoExistente) {
            setCarrito(prev => [...prev, { item: { ...item, cantidad, img: item.img }, cantidad }]);
            setCantidadTotal(prev => prev + cantidad);
            setTotal(prev => prev + (item.precio * cantidad));
        } else {
            const carritoActualizado = carrito.map(prod => {
                if (prod.item.id === item.id) {
                    return { ...prod, cantidad: prod.cantidad + cantidad };
                } else {
                    return prod;
                }
            });

            setCarrito(carritoActualizado);
            setCantidadTotal(prev => prev + cantidad);
            setTotal(prev => prev + (item.precio * cantidad));

        }
    };

    const eliminarProducto = (id) => {
        Swal.fire({
            title: "Estas seguro?",
            text: "Eliminaras este producto",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Eliminar",
            cancelButtonText: "Cancelar"
        }).then((result) => {
            if (result.isConfirmed) {
                const productoEliminado = carrito.find(prod => prod.item.id === id);
                const carritoActualizado = carrito.filter(prod => prod.item.id !== id);


                setCarrito(carritoActualizado);
                setCantidadTotal(prev => prev - productoEliminado.cantidad);
                setTotal(prev => prev - (productoEliminado.item.precio * productoEliminado.cantidad));
                Swal.fire({
                    title: "Eliminado",
                    text: "Eliminaste este producto",
                    icon: "error"
                });
            }
        });


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
                Swal.fire({
                    title: "Borrados",
                    text: "Tus productos se eliminaron",
                    icon: "error"
                });
            }
        });

    }

    return (
        <CarritoContext.Provider value={{ carrito, total, cantidadTotal, agregarAlCarrito, eliminarProducto, vaciarCarrito }}>
            {children}
        </CarritoContext.Provider>
    );
};

//en el value enviamos el valor actual del carrito, los items, el total de la compra, y funciones de agregar, eliminar y vaciar carrito.
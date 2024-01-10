//1) Voy a importar useState y createContext que me permite crear un contexto que almacenará toda la logica de mi carrillo de compras. 

import { useState, createContext } from "react";

//2)Creamos el context: 

export const CarritoContext = createContext({
    carrito: [], 
    total: 0, 
    cantidadTotal: 0
})

//El valor inicial es un objeto, con la propiedad carrito, que es una array vacio, el total de la compra, y la cantidad total de productos. 

export const CarritoProvider = ({children}) => {
    //Creamos los estados: 
    const [carrito, setCarrito] = useState([]);
    const [total, setTotal] = useState(0);
    const [cantidadTotal, setCantidadTotal] = useState(0);

    //Verificamos por consola:  (después lo borramos)
    console.log(carrito); 
    console.log("Cantidad Items: ", cantidadTotal );
    console.log("Precio total de la compra: ", total);

    ///////////////////////////////////////////

    //Agregamos algunas funciones para lo lógica del carrito: 

    const agregarAlCarrito = (item, cantidad) => {
        const productoExistente = carrito.find(prod => prod.item.id === item.id); 

        if(!productoExistente) {
            setCarrito(prev => [...prev, {item, cantidad}]);
            setCantidadTotal(prev => prev + cantidad);
            setTotal( prev => prev + (item.precio * cantidad)); 
            //La sintaxis: prev => [...prev, {item, cantidad}] se utiliza para crear un nuevo array a partir del estado anterior del carrito y agregar un nuevo objeto que representa el producto agregado. 
        } else {
            const carritoActualizado = carrito.map( prod => {
                if(prod.item.id === item.id) {
                    return {...prod, cantidad: prod.cantidad + cantidad};
                }else {
                    return prod; 
                }
            })
            setCarrito(carritoActualizado);
            setCantidadTotal(prev => prev + cantidad);
            setTotal( prev => prev + (item.precio * cantidad)); 
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
        <CarritoContext.Provider value={{carrito, total, cantidadTotal, agregarAlCarrito, eliminarProducto, vaciarCarrito}}>
            {children}
        </CarritoContext.Provider>
     )
}

//en el value enviamos el valor actual del carrito, los items, el total de la compra y las funciones de agregar, eliminar y vaciar carrito. 
import React, { useState } from 'react';
import './ItemCount.css';

const ItemCount = ({ inicial, stock, funcionAgregar }) => {
    // Estado para manejar la cantidad seleccionada
    const [contador, setContador] = useState(inicial);

    // Función para incrementar la cantidad
    const incrementar = () => {
        if (contador < stock) {
            setContador(contador + 1);
        }
        
        // Toast de éxito cuando se agrega un producto
        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            }
        });
        Toast.fire({
            icon: "success",
            title: "Producto agregado"
        });
    }

    // Función para decrementar la cantidad
    const decrementar = () => {
        if (contador > inicial) {
            setContador(contador - 1);
        }

        // Toast de error cuando se elimina un producto
        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            }
        });
        Toast.fire({
            icon: "error",
            title: "Producto eliminado"
        });
    }

    return (
        <div className='contador'>
            {/* Contenedor de botones para incrementar y decrementar la cantidad */}
            <div className='container-buttons'>
                <button onClick={decrementar} className='btn-res poppins'> - </button>
                <p className='numerito poppins'> {contador} </p>
                <button onClick={incrementar} className='btn-sum poppins'> + </button>
            </div>
            {/* Botón para agregar la cantidad seleccionada al carrito */}
            <button onClick={() => funcionAgregar(contador)} className='btn-agregar poppins'>
                Agregar
            </button>
        </div>
    )
}

export default ItemCount;
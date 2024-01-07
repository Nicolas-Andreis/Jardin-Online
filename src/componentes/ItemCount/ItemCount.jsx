// ItemCount.jsx
import React, { useState } from 'react';
import './ItemCount.css';

const ItemCount = ({ inicial, stock, funcionAgregar }) => {
    const [contador, setContador] = useState(inicial);

    const incrementar = () => {
        if (contador < stock) {
            setContador(contador + 1);
        }
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

    const decrementar = () => {
        if (contador > inicial) {
            setContador(contador - 1);
        }
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

            <div className='container-buttons'>
                <button onClick={decrementar} className='btn-res poppins'> - </button>
                <p className='numerito poppins'> {contador} </p>
                <button onClick={incrementar} className='btn-sum poppins'> + </button>
            </div>
            <button onClick={() => funcionAgregar(contador)} className='btn-agregar poppins'>
                Agregar
            </button>
        </div>
    )
}

export default ItemCount;
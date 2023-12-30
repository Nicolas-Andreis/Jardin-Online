// ItemCount.jsx
import React, { useState } from 'react';
import './ItemCount.css';

const ItemCount = ({ inicial, stock, funcionAgregar }) => {
    const [contador, setContador] = useState(inicial);

    const incrementar = () => {
        if (contador < stock) {
            setContador(contador + 1);
        }
    }

    const decrementar = () => {
        if (contador > inicial) {
            setContador(contador - 1);
        }
    }

    return (
        <div className='contador'>

            <div className='container-buttons'>
                <button onClick={decrementar} className='btn-res'> - </button>
                <p className='numerito'> {contador} </p>
                <button onClick={incrementar} className='btn-sum'> + </button>
            </div>
            <button onClick={() => funcionAgregar(contador)} className='btn-agregar'>
                Agregar
            </button>
        </div>
    )
}

export default ItemCount;
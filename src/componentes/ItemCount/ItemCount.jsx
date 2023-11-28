import React from 'react'
import { useState } from 'react';
import './ItemCount.css'

const ItemCount = () => {
    const [contador, setContador] = useState(0);

    //3 creamos las funciones para aumetar el contador o disminuir
    let stock = 10;

    const incrementar = () => {
        if(contador < stock){
            setContador(contador + 1);
        }
        
    }

    const decrementar = () => {
        if (contador > 0){
            setContador(contador - 1);
        }
        
    }
  return (
    <div className='contador'>
    {contador === 0 ? (
        <button onClick={incrementar} className='btn-agregar'> agregar </button>
    ) : (
        <>
            <button onClick={decrementar} className='btn-res'> - </button>
            <p> {contador} </p>
            <button onClick={incrementar} className='btn-sum'> + </button>
        </>
    )}
</div>
  )
}

export default ItemCount
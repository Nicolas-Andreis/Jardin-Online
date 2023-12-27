import React from 'react'
import './Buscador.css'
import lupa from '../../imagenes/iconos/lupa.png'

const Buscador = ({ onBuscar }) => {
  return (
    <div className='buscador'>
      <button className='container-lupa'>
        <img src={lupa} alt='' className='lupa' />
      </button>
      <input
        type='text'
        className='input poppins'
        placeholder='Buscar'
        onChange={onBuscar}
      />
    </div>
  );
};

export default Buscador
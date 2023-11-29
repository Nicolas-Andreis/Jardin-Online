import React from 'react'
import './Buscador.css'
import lupa from '../../imagenes/iconos/lupa.png'

const Buscador = () => {
  return (
    <div className='buscador'>
        <button className='container-lupa'><img src={lupa} alt="" className='lupa'/></button>
        <input type="text" className='input poppins' placeholder='Buscar'/>
    </div>
  )
}

export default Buscador
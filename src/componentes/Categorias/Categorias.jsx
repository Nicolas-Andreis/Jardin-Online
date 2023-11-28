import React from 'react'
import Todos from '../../imagenes/categorias/todos.jpg'
import Bases from '../../imagenes/categorias/bases.jpg'
import Plantas from '../../imagenes/categorias/plantas.jpg'
import Semillas from '../../imagenes/categorias/semillas.jpg'
import Estructuras from '../../imagenes/categorias/estructuras.jpg'
import './Categorias.css'

const Categorias = () => {
  return (
    <div className='categoria-container'>
        <div className='categoria-rectangle'>
            <h2 className='poppins'>Todos</h2>
            <img src={Todos} alt="" />
        </div>
        <div className='categoria-rectangle'>
            <h2 className='poppins'>Bases</h2>
            <img src={Bases} alt="" />
        </div>
        <div className='categoria-rectangle'>
            <h2 className='poppins'>Plantas</h2>
            <img src={Plantas} alt="" />
        </div>
        <div className='categoria-rectangle'>
            <h2 className='poppins'>Estructuras</h2>
            <img src={Estructuras} alt="" />
        </div>
        <div className='categoria-rectangle'>
            <h2 className='poppins'>Semillas</h2>
            <img src={Semillas} alt="" />
        </div>
    </div>
  )
}

export default Categorias
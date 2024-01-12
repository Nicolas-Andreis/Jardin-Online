import React from 'react'
import Imagen1 from '../../imagenes/ilustraciones/1.png'
import Imagen2 from '../../imagenes/ilustraciones/2.png'
import Imagen3 from '../../imagenes/ilustraciones/3.png'
import Imagen4 from '../../imagenes/ilustraciones/4.png'

import './Ilustraciones.css'
const Ilustraciones = () => {
    return (
        <div className='ilustraciones'>
            <div className='center'>
                <div className='circle'>
                <img src={Imagen1} alt="" />
                </div>          
                <h3 className='poppins'>Cuidados</h3>
            </div>
            <div className='center'>
                <div className='circle'>
                <img src={Imagen2} alt="" />
                </div>
                
                <h3 className='poppins'>Renovación de plantas</h3>
            </div>
            <div className='center'>
                <div className='circle'>
                <img src={Imagen3} alt="" />
                </div>
                
                <h3 className='poppins'>Suministro de semillas</h3>
            </div>
            <div className='center'>
                <div className='circle'>
                <img src={Imagen4} alt="" />
                </div>
                
                <h3 className='poppins'>Riego del jardín</h3>
            </div>

        </div>

    )
}

export default Ilustraciones
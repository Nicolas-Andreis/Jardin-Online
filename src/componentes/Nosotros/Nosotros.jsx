import React from 'react'
import logo from '../../imagenes/logo/logo.png';
import './Nosotros.css'
const Nosotros = () => {
  return (
    <div className='container-nosotros'>
        <div className='card-nosotros'>
                
            <p>
                ¡Bienvenido a Vivero Online en Bahía Blanca! Ofrecemos una amplia gama de plantas, árboles y accesorios para jardinería. Nuestro vivero está dedicado a brindar productos de calidad, asesoramiento experto y servicios personalizados. Desde especies nativas hasta exóticas, contamos con una selección diversa para todo tipo de espacios. Nuestro equipo está disponible para brindar consejos sobre cuidados y diseños paisajísticos. Además, ofrecemos suministros de jardinería de primera calidad para complementar tu pasión por el verde. Con una experiencia de compra en línea fácil y conveniente, Vivero Online te invita a descubrir y embellecer tu jardín en Bahía Blanca. ¡Haz clic y deja que la naturaleza florezca en tu hogar!
            </p>
            <img src={logo} alt="" />
            </div>
    </div>
  )
}

export default Nosotros
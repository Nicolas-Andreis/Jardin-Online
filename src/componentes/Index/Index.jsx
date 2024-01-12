import React from 'react'
import Ilustraciones from '../Ilustraciones/Ilustraciones';
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import Footer from '../Footer/Footer';
import './Index.css'
const Index = () => {
 
    return (
        <div>
            <div className="fondoImagen">
                <div className='container-title'>
                    <h1>
                        Jardín online <br />
                        amor por las plantas
                    </h1>
                </div>
            </div>
            <h2 className='subtitulos mobile-ocultar'>Nosotros te ayudamos</h2>
            <Ilustraciones />
            <div className='container-productos'>
                <ItemListContainer />
            </div>
            <Footer />
        </div>

    )
}

export default Index
import React from 'react'
import { useState } from 'react';
import Ilustraciones from '../Ilustraciones/Ilustraciones';
import Categorias from '../Categorias/Categorias';
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import CarritoBtn from '../MiCarritoBtn/MiCarritoBtn';
import Footer from '../Footer/Footer';
import './Index.css'
const Index = () => {
    const [titulo, setTitulo] = useState('Todos los productos');

    const cambiarTituloCategoria = (nombreCategoria) => {
        setTitulo(nombreCategoria);
    }
    return (
        <div>
            <div className="fondoImagen">
                <div className='container-title'>
                    <h1>
                        jardin online <br />
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
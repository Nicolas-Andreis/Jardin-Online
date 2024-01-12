import React from 'react';
import Todos from '../../imagenes/categorias/todos.jpg';
import Bases from '../../imagenes/categorias/bases.jpg';
import Plantas from '../../imagenes/categorias/plantas.jpg';
import Semillas from '../../imagenes/categorias/semillas.jpg';
import './Categorias.css';
import { Link } from 'react-router-dom';


const Categorias = ({ cambiarTitulo }) => {
    

    const handleClickCategoria = (nombreCategoria) => {
        cambiarTitulo(nombreCategoria);
        
    };

    return (
        <div>
            <h2 className='subtitulos'>Categorías</h2>
            <div className='categoria-container'>
            <Link to="/categoria/todos" className='link-b'>
                <div className='categoria-rectangle' onClick={() => handleClickCategoria('Todos')}>
                    <h2 className='poppins'>Todos</h2>
                    <img src={Todos} alt="" />
                    </div>
                </Link>
            
            
                <Link to="/categoria/bases" className='link-b'>
                <div className='categoria-rectangle' onClick={() => handleClickCategoria('Bases')}>
                    <h2 className='poppins'>Bases</h2>
                    <img src={Bases} alt="" />
                    </div>
                </Link>
            
            
                <Link to="/categoria/plantas" className='link-b'>
                <div className='categoria-rectangle' onClick={() => handleClickCategoria('Plantas')}>
                    <h2 className='poppins'>Plantas</h2>
                    <img src={Plantas} alt="" />
                    </div>
                </Link>
            
            
                <Link to="/categoria/semillas" className='link-b'>
                <div className='categoria-rectangle' onClick={() => handleClickCategoria('Semillas')}>
                    <h2 className='poppins'>Semillas</h2>
                    <img src={Semillas} alt="" />
                    </div>
                </Link>
            </div>
                
            
        </div>
    );
}

export default Categorias;
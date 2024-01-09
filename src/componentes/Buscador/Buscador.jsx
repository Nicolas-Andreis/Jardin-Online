import React, { useState } from 'react';
import './Buscador.css';
import { Link } from 'react-router-dom';

const Buscador = () => {
  const [mostrarSugerencias, setMostrarSugerencias] = useState(false);
  const categorias = ['todos', 'macetas', 'semillas', 'plantas'];

  return (
    <div className='buscador'>
      <button onClick={() => setMostrarSugerencias(!mostrarSugerencias)} className='btn-buscar poppins'>
        Buscar
      </button>
      {mostrarSugerencias && (
        <ul className='container-ul'>
          {categorias.map((categoria) => (
            <li key={categoria}>
              <Link to={`/categoria/${categoria}`} className='categoria-link poppins'>
                {categoria.charAt(0).toUpperCase() + categoria.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Buscador;
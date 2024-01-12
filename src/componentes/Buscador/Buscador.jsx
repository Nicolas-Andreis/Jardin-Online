import React, { useState } from 'react';
import './Buscador.css';
import { Link } from 'react-router-dom';

const Buscador = () => {
  // Estado para controlar si se deben mostrar las sugerencias
  const [mostrarSugerencias, setMostrarSugerencias] = useState(false);

  // Lista de categorías
  const categorias = ['todos', 'macetas', 'semillas', 'plantas'];

  return (
    <div className='buscador'>
      {/* Botón para mostrar/ocultar sugerencias */}
      <button onClick={() => setMostrarSugerencias(!mostrarSugerencias)} className='btn-buscar poppins'>
        Buscar
      </button>

      {/* Lista de sugerencias */}
      {mostrarSugerencias && (
        <ul className='container-ul'>
          {/* Mapear cada categoría a un elemento de lista */}
          {categorias.map((categoria) => (
            <li key={categoria}>
              {/* Enlace a la página de la categoría correspondiente */}
              <Link to={`/categoria/${categoria}`} className='categoria-link poppins'>
                {/* Mostrar el nombre de la categoría con la primera letra en mayúscula */}
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
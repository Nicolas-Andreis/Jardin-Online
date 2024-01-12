import React from 'react';
import './ItemListContainer.css';
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from 'react-router-dom';
import Categorias from '../Categorias/Categorias';
import CarritoBtn from '../MiCarritoBtn/MiCarritoBtn';
import { db } from '../../services/config';
import { collection, getDocs, where, query } from 'firebase/firestore';

const ItemListContainer = () => {
  // Estado para almacenar el título que se mostrará en la página
  const [titulo, setTitulo] = useState('Todos los productos');

  // Función para cambiar el título según la categoría seleccionada
  const cambiarTituloCategoria = (nombreCategoria) => {
    setTitulo(nombreCategoria);
  };

  // Estado para almacenar la lista de productos
  const [productos, setProductos] = useState([]);

  // Obtenemos el parámetro de la URL que indica la categoría seleccionada
  const { idCategoria } = useParams();

  // Efecto que se ejecuta cuando cambia la categoría seleccionada
  useEffect(() => {
    // Creamos la consulta a Firebase Firestore según la categoría seleccionada
    const misProductos = idCategoria
      ? query(collection(db, "Inventario"), where("categoria", "==", idCategoria))
      : collection(db, "Inventario");

    // Ejecutamos la consulta y actualizamos el estado de productos
    getDocs(misProductos)
      .then(res => {
        const nuevosProductos = res.docs.map(doc => {
          const data = doc.data();
          return { id: doc.id, ...data };
        });
        setProductos(nuevosProductos);
      })
      .catch(error => console.log("Error al obtener productos:", error));
  }, [idCategoria]);

  return (
    <div className='container-productos'>
      {/* Componente de categorías con función para cambiar el título */}
      <Categorias cambiarTitulo={cambiarTituloCategoria} titulo={titulo} />
      {/* Componente del botón de carrito */}
      <CarritoBtn />
      {/* Título de la página */}
      <h2 className='subtitulos'>{titulo}</h2>
      {/* Componente que muestra la lista de productos */}
      <ItemList productos={productos} />
    </div>
  );
};

export default ItemListContainer;
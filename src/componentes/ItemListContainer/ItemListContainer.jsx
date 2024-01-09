import React from 'react'
import './ItemListContainer.css'
import { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList";
import { useParams } from 'react-router-dom';
import Categorias from '../Categorias/Categorias';
import CarritoBtn from '../MiCarritoBtn/MiCarritoBtn';
import { db } from '../../services/config';
import { collection, getDocs, where, query } from 'firebase/firestore';

const ItemListContainer = () => {
  const [titulo, setTitulo] = useState('Todos los productos');

    const cambiarTituloCategoria = (nombreCategoria) => {
        setTitulo(nombreCategoria);
    }
  const [productos, setProductos] = useState([]);

  const { idCategoria } = useParams();

  useEffect(() => {
    const misProductos = idCategoria ? query(collection(db, "Inventario"), where("categoria", "==", idCategoria)) : collection(db, "Inventario");
    
    getDocs(misProductos)
      .then(res => {
        const nuevosProductos = res.docs.map(doc => {
          const data = doc.data();
          return {id:doc.id, ...data}
        })
        setProductos(nuevosProductos);
      })
      .catch(error => console.log("error", error))
  }, [idCategoria])

  // useEffect(() => {
  //     const funcionProductos = idCategoria ? getProductosPorCategoria : getProductos;

  //     funcionProductos(idCategoria)
  //         .then(respuesta => setProductos(respuesta))
  // }, [idCategoria]);

  // Si no hay ninguna categoría seleccionada, obtener todos los productos
  // useEffect(() => {
  //     if (!idCategoria) {
  //         getProductos().then(respuesta => setProductos(respuesta));
  //     }
  // }, [idCategoria]);

  return (
    <div className='container-productos'>
    <Categorias cambiarTitulo={cambiarTituloCategoria} titulo={titulo} />
    <CarritoBtn />
    <h2 className='subtitulos'>{titulo}</h2>
    <ItemList productos={productos} />
</div>
  );
}

export default ItemListContainer;
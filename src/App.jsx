import React, { useState } from 'react';
import './App.css';
import NavBar from './componentes/NavBar/Navbar';
import Ilustraciones from './componentes/Ilustraciones/Ilustraciones';
import Categorias from './componentes/Categorias/Categorias';
import Home from './componentes/Index/Index';
import Footer from './componentes/Footer/Footer';
import CarritoBtn from './componentes/MiCarritoBtn/MiCarritoBtn';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';

const App = () => {

  return (
    <div className='container'>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Jardin-Online/' element={<Home />} />
          <Route path='/categoria/:idCategoria' element={<ItemListContainer />} />
          <Route path='/item/:idItem' element={<ItemDetailContainer />} />
          <Route path='/productos' element={<ItemListContainer />} />
          <Route path='/categoria/todos' element={<ItemListContainer />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
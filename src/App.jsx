import React, { useState } from 'react';
import './App.css';
import NavBar from './componentes/NavBar/Navbar';
import Home from './componentes/Index/Index';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import Nosotros from './componentes/Nosotros/Nosotros';
import { CarritoProvider } from './context/CarritoContext';
import Cart from './componentes/Cart/Cart';
import Checkout from './componentes/Checkout/Checkout';
import { OrderProvider } from './context/MisOrdenesContext';
import MisOrdenes from './componentes/MisOrdenes/MisOrdenes';
const App = () => {

  return (
    <div className='container'>
      <BrowserRouter>
        <CarritoProvider>
        <OrderProvider>
          <NavBar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Jardin-Online/' element={<Home />} />
            <Route path='/categoria/:idCategoria' element={<ItemListContainer />} />
            <Route path="/item/:idItem" element={<ItemDetailContainer/>}  />
            <Route path='/productos' element={<ItemListContainer />} />
            <Route path='/nosotros' element={<Nosotros />} />
            <Route path='/categoria/todos' element={<ItemListContainer />} />
            <Route path='/cart' element={<Cart/>} />
            <Route path='/checkout' element={<Checkout/>} />
            <Route path='/misOrdenes' element={<MisOrdenes/>} />
          </Routes>
          </OrderProvider>
        </CarritoProvider>
      </BrowserRouter>
    </div>
  )
}

export default App;
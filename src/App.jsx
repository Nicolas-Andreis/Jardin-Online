import React from 'react'
import './App.css'; 
import NavBar from './componentes/NavBar/Navbar';
import ProductoCard from './componentes/ProductoCard/ProductoCard';
import Ilustraciones from './componentes/Ilustraciones/Ilustraciones';
import Categorias from './componentes/Categorias/Categorias';
import Home from './componentes/Index/Index';
import Footer from './componentes/Footer/Footer';
import CarritoBtn from './componentes/MiCarritoBtn/MiCarritoBtn';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';


const App = () => {
  // const profesor = "samuel";
  // let curso = "react"
  return (
    <div className='container'>
      <NavBar/>
      <ItemListContainer greeting="Hola Mundo"/>
      {/* <h1>hola, mi profesor es {profesor}</h1>
      <h2>estoy cursando {curso} </h2> */}
      <Home/>
      <h2 className='subtitulos'>Nosotros te ayudamos</h2>
      <Ilustraciones/>
      <h2 className='subtitulos'>Categorias</h2>
      <Categorias/>
      <h2 className='subtitulos'>Todos los productos</h2>
      <CarritoBtn/>
      <div className='container-productos'>
      <ProductoCard/>
      <ProductoCard/>
      <ProductoCard/>
      <ProductoCard/>
      </div>
      <Footer/>

    </div>
  )
}

export default App
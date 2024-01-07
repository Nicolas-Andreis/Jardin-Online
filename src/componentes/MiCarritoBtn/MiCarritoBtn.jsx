import React from 'react'
import './MiCarritoBtn.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'
const MiCarritoBtn = () => {
    return (
        <div className='container-button'>
            <Link to="/cart" className='link-carrito'>
            <button className='micarritobtn'>
                <p>Mi carrito</p>
                <CartWidget/>
            </button>
            </Link>
            
        </div>

    )
}

export default MiCarritoBtn
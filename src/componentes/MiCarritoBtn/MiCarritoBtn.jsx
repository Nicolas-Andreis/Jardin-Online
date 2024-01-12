import React from 'react';
import './MiCarritoBtn.css';
import CartWidget from '../CartWidget/CartWidget';

const MiCarritoBtn = () => {
    return (
        <div className='container-button'>
            <button className='micarritobtn'>
                <p>Mi carrito</p>
                <CartWidget />
            </button>
        </div>
    );
}

export default MiCarritoBtn;
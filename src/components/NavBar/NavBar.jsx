import React from 'react';
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget';


const NavBar = () => {
  return (
    <header>
        <h1>Tienda Argenta</h1>
        <nav>
            <ul>
                <li>Inicio</li>
                <li>Comidas</li>
                <li>Recuerdos</li>
            </ul>
        </nav>
        <CartWidget/>
    </header>
  )
}

export default NavBar
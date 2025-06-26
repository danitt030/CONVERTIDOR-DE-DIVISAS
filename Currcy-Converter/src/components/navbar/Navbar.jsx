import React from 'react'
import './navbar.css'
import logo from '../../assets/home.png'
 
export const Navbar = () => {
  return (
    <nav className='navbar'>
        <div className='navbar-content'>
            <span className='logo'>
                <h1>Convertidor de divisas</h1>
            </span>
            <img src={logo} alt="home"/>
        </div>
    </nav>
  )
} 
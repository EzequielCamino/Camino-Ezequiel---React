import React from 'react'
import logo from '../../logo.svg'
import cart from '../../cart.svg'
import './Navbar.css'

const Navbar = () => {

  const navbarItems = ["Products", "About", "Login"]

  return (
    <div id='Navbar'>
      <div className='logo'>
        <img src={logo} alt="logo" width='50px' />
        <h2>MyReactApp</h2>
      </div>
      <ul className='categories'>
        {navbarItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <div>
        <img className='cart' src={cart} alt="cart" />
      </div>
    </div>
  )
}

export default Navbar
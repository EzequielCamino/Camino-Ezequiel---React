import React from 'react'
import cart from '../../cart.svg'
import { Link } from 'react-router-dom'

function CartWidget() {
  return (
    <Link to="/cart">
      <img className='cart' src={cart} alt="cart" />
    </Link>
  )
}

export default CartWidget
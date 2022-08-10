import React from 'react'
import cart from '../../cart.svg'

function CartWidget() {
  return (
    <img className='cart' src={cart} alt="cart" />
  )
}

export default CartWidget
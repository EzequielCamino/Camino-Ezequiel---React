import React from 'react'
import cart from '../../cart.svg'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import "./CartWidget.scss"

function CartWidget() {
  const {items} = useContext(CartContext);
  let acc = 0;
  items.map((item)=> acc=acc+item.qty)

  return (
    <Link to="/cart" style={{textDecoration:'none'}}>
      <div className='cartWidget'>
        <img className='cart' src={cart} alt="cart" />
        {acc === 0 ?
        ""
        : <h4 className='cartCounter'>{acc}</h4>}
      </div>
    </Link>
  )
}

export default CartWidget
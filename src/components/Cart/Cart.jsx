import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Button } from 'react-bootstrap'
import "./cart.scss"


function Cart() {
  const {items, removeItem, clear} = useContext(CartContext);

  return (
    <div className='cart'>
      <h2 className='cartTitle'>CARRITO</h2>
      {items.length ?
      <div className='cartContent'> 
        <ul className='cartContentList'>
          {items.map((item, index) => <li key={index}>{item.title} - Cantidad: {item.qty} <Button variant='warning' size='sm' onClick={()=>removeItem(item.id)}>X</Button> </li>)}
        </ul>
        <Button variant='warning' onClick={clear}>Limpiar carrito</Button>
      </div>
      : <h3>No hay productos en el carrito</h3>
      }
    </div>
  )
}

export default Cart
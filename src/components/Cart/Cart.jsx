import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "./Cart.scss"
import CartForm from '../CartForm/CartForm'

function Cart() {
  const {items, removeItem, clear} = useContext(CartContext);

  let total = items.reduce((pv, cv)=> pv + (cv.price * cv.qty), 0)

  return (
    <div className='cart'>
      <h2 className='cartTitle'>CARRITO</h2>
      {items.length ?
      <div className='cartDiv'>
        <div>
        <div className='cartContent'> 
          <ul className='cartContentList'>
            {items.map((item, index) => <li key={index}> <Link className='cartContentListLink' to={`/item/${item.id}`}>{item.title}</Link>  - Cantidad: {item.qty} - Precio: U$D{item.price * item.qty} <Button variant='warning' size='sm' onClick={()=>removeItem(item.id)}>X</Button> </li>)}
          </ul>
          <h3>Total: U$D{total}</h3>
          <Button variant='warning' onClick={clear}>Limpiar carrito</Button>
          </div>
        </div>
        <div >
          <CartForm total={total} compra={items}/>
        </div>
      </div>
      : <div className='cartContent'>
          <h3>No hay productos en el carrito</h3>
          <Link to={'/'}> <Button variant='warning'>Elegir productos</Button> </Link>
        </div>
      }
    </div>
  )
}

export default Cart
import React from 'react'
import { useState } from 'react'
import './ItemCount.scss'
import Button from 'react-bootstrap/Button';
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

function ItemCount({stock, initial, onAdd, title}) {
    const {noStock} = useContext(CartContext)
    const [counter, setCounter] = useState(initial);
    
        const aumentarCounter = ()=> {
            counter<stock ? setCounter(counter + 1) :
            noStock();
        };

        const disminuirCounter = ()=> {
            if (counter >0){setCounter(counter - 1)}
        };

  return (
    <>
        <div className='counter'>
            <Button variant="warning" onClick={disminuirCounter} disabled={counter<=0}> - </Button>
            <h3>{counter}</h3>
            <Button variant="warning" onClick={aumentarCounter}> + </Button>
        </div>
        <div className='addCart'>
            <span>Unidades en stock: {stock}</span>
            <Button variant="warning" disabled={counter <=0} onClick={()=>onAdd(counter, title)}>Agregar al carrito</Button>
        </div>
    </>
  )
}

export default ItemCount
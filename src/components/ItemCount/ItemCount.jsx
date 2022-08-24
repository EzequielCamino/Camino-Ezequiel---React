import React from 'react'
import { useState } from 'react'
import './ItemCount.css'

function ItemCount({stock, initial, onAdd, title}) {
    const [counter, setCounter] = useState(initial);
    
        const aumentarCounter = ()=> {
            counter<stock ? setCounter(counter + 1) : alert('No hay más stock disponible')
        };

        const disminuirCounter = ()=> {
            if (counter >0){setCounter(counter - 1)}
        };

  return (
    <>
        <div className='counter'>
            <button onClick={disminuirCounter} disabled={counter<=0}> - </button>
            <span>{counter}</span>
            <button onClick={aumentarCounter}> + </button>
        </div>
        <div className='addCart'>
            <button disabled={counter <=0} onClick={()=>onAdd(counter, title)}>Agregar al carrito</button>
        </div>
    </>
  )
}

export default ItemCount
import React from 'react'
import "./item.css";

function Item({id, img, title, price}) {
  return (
    <div className='card'>
        <h2>{title}</h2>
        <img className='cardImg' src={img} alt="" />
        <h3>Precio: {price}U$D</h3>
    </div>
  )
}

export default Item
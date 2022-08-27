import Card from 'react-bootstrap/Card';
import React from 'react'
import "./ItemDetail.scss"
import ItemCount from '../ItemCount/ItemCount';

function ItemDetail({item}) {
    const onAdd = (counter, title)=> {
        alert("Se agregaron " + counter + " unidades al carrito de " + title)
    }
    const {title, img, price, info} = item

  return (
    <Card border="warning" className="text-center itemDetail">
      <Card.Body>
        <Card.Title><h2>{title}</h2></Card.Title>
        <div className='itemDetailCardBody'>
            <div className='itemDetailCardImg'>
                <img src={img} alt="" />
            </div>
            <div className='itemDetailCardText'>
                <span>{info}</span>
                <h3 className='itemDetailCardTextPrice'>Precio: U$D{price}</h3>
                <ItemCount stock={5} initial={0} onAdd={onAdd} title={item.title} />
            </div>    
        </div>
      </Card.Body>
    </Card>
  );
}

export default ItemDetail;
import Card from 'react-bootstrap/Card';
import React, {useState, useContext} from 'react'
import "./ItemDetail.scss"
import { CartContext } from '../../context/CartContext';
import ItemCount from '../ItemCount/ItemCount';
import Button from 'react-bootstrap/esm/Button';
import { Link } from 'react-router-dom';

function ItemDetail({item}) {
  const [qty, setQty] = useState(0);
  const {addItem} = useContext(CartContext);

  const onAdd = (counter)=> {
    setQty(counter);
    alert("Se agregaron " + counter + " unidades al carrito de " + title);
    addItem(item, counter);
  }

  const {title, img, price, info, stock} = item

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
                { qty===0 ?
                <ItemCount stock={stock} initial={0} onAdd={onAdd} title={item.title}/> :
                <Link to="/cart"><Button variant="warning">Finalizar compra</Button></Link> }
            </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ItemDetail;
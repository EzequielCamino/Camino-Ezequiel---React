import React from 'react'
import {Link} from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';

function Item({id, img, title, price}) {
  return (
    <Card border="warning" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
          <Card.Text>
          Precio: U$D{price}
          </Card.Text>
          <Link to={`/item/${id}`}>
            <Button variant="warning"> Ver detalle </Button>
          </Link>
      </Card.Body>
    </Card>
  )
}

export default Item
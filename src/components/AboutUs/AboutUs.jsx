import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "./AboutUs.scss"

function AboutUs() {
  return (
    <Card className="text-center aboutus">
        <Card.Img variant='top' src='https://i.imgur.com/z1v03j9.jpg'/>
        <Card.Body>
            <Card.Title>Somos GoldenLoot®</Card.Title>
            <Card.Text>
            Somos una de las primeras tiendas HYPE 100% online en la Argentina. Con mas de 2 años de experiencia en la industria de los sneakers y el hype, traemos la experiencia y la cultura del streetwear y las marcas highend al país . En GoldenLoot® vas a encontrar productos únicos y 100% originales.
            </Card.Text>
            <Link to='/'><Button variant="warning">Volver a la homepage</Button></Link>
        </Card.Body>
        <Card.Footer className="text-muted">Sitio web creado por <a href="https://github.com/EzequielCamino/Camino-Ezequiel---React" target="/blank">Ezequiel Camino</a></Card.Footer>
    </Card>
  )
}

export default AboutUs
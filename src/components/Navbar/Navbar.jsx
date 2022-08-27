import React from 'react'
import logo from '../../logo.svg'
import CartWidget from '../CartWidget/CartWidget'
import './Navbar.scss'
import {Link} from 'react-router-dom';
import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';

function MyAppNavbar() {
  return (
    <Navbar id="navbar" collapseOnSelect expand="lg" bg="warning" variant="white">
      <Container>
        <Link className='logo' to="/">
          <img className='logoImg' src={logo} alt="logo" />
          <Navbar.Brand className='logoText'>React + Bootstrap</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#Login">Login</Nav.Link>
            <Nav.Link href="#AboutUs">Nosotros</Nav.Link>
            <NavDropdown title="Categorías" id="collasible-nav-dropdown">
              <Link to="/category/Jordan"><NavDropdown.Item className='navbarCategory' href="#Jordan">Jordan</NavDropdown.Item></Link>
              <Link to="/category/Nike"><NavDropdown.Item href="#Nike">Nike</NavDropdown.Item></Link>
              {/* <NavDropdown.Item href="#Adidas">Adidas</NavDropdown.Item> */}
              <NavDropdown.Divider/>
              <Link to="/"><NavDropdown.Item href="#TodosLosProductos">Todos los productos</NavDropdown.Item></Link>
              
            </NavDropdown>
          </Nav>
          <Nav>
            <CartWidget className="navbarCart"/>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyAppNavbar;
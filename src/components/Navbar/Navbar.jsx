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
        <Link className='logo' to="/" style={{textDecoration:'none'}}>
          <img className='logoImg' src={logo} alt="logo" />
          <Navbar.Brand className='logoText'>GoldenLoot</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link to="/AboutUs" className='navbarLink' style={{marginTop:'0.5rem'}}>Sobre nosotros</Link>
            <NavDropdown title="Categorías" id="collasible-nav-dropdown">
              <Link to="/category/Jordan" href="#Jordan" className='navbarLink'>Jordan</Link>
              <Link to="/category/Nike" href="#Nike" className='navbarLink'>Nike</Link>
              <Link to="/category/Adidas" href="#Adidas" className='navbarLink' style={{marginRight:'1rem'}}>Adidas</Link>
              <NavDropdown.Divider/>
              <Link to="/category/Indumentaria" href="#Indumentaria" className='navbarLink'>Indumentaria</Link>
              <NavDropdown.Divider/><NavDropdown.Divider/>
              <Link to="/" href="#TodosLosProductos" className='navbarLink'>Todos los productos</Link>
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
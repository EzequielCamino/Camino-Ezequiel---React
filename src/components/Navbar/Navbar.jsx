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
          <Navbar.Brand className='logoText'>React + Bootstrap</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#Login">Login</Nav.Link>
            <Nav.Link href="#AboutUs">Nosotros</Nav.Link>
            <NavDropdown title="Categorías" id="collasible-nav-dropdown">
              <NavDropdown.Item><Link to="/category/Jordan" href="#Jordan" style={{color:'black', textDecoration:'none'}}>Jordan</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to="/category/Nike" href="#Nike" style={{color:'black', textDecoration:'none'}}>Nike</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to="/category/Adidas" href="#Adidas" style={{color:'black', textDecoration:'none'}}>Adidas</Link></NavDropdown.Item>
              <NavDropdown.Divider/>
              <NavDropdown.Item><Link to="/" href="#TodosLosProductos" style={{color:'black', textDecoration:'none'}}>Todos los productos</Link></NavDropdown.Item>
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
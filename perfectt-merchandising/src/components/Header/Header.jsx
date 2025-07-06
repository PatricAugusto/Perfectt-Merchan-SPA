// src/components/Header/Header.jsx
import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap'; // Importamos componentes Bootstrap
import styles from './Header.module.css'; // Importamos o CSS modular (se houver)
import logo from '../../assets/perfectt-logo.png'; // Exemplo: importando um logo da pasta assets

function Header() {
  return (
    <Navbar bg="light" expand="lg" className={styles.navbarCustom}> {/* Usamos classes do Bootstrap e nossa classe customizada */}
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={logo}
            width="150"
            height="50"
            className="d-inline-block align-top"
            alt="Perfectt Merchandising Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto"> {/* ms-auto para alinhar à direita */}
            <Nav.Link href="#hero">Início</Nav.Link>
            <Nav.Link href="#about">Sobre</Nav.Link>
            <Nav.Link href="#services">Serviços</Nav.Link>
            <Nav.Link href="#contact">Contato</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
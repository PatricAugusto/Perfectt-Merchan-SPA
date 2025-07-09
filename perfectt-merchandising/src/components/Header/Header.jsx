// src/components/Header/Header.jsx
import React, { useState, useEffect } from 'react'; 
import {
  NavbarContainer,
  NavbarBrand,
  NavbarNav,
  NavLink,
  NavbarToggler,
  NavbarTogglerIcon,
} from './Header.styles';
import logo from '../../assets/perfectt-logo.png';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 991.98) { 
        setMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <NavbarContainer>
      <NavbarBrand href="#hero">
        <img src={logo} alt="Perfectt Merchandising Logo" />
      </NavbarBrand>

      <NavbarToggler onClick={toggleMenu} aria-controls="basic-navbar-nav">
        <NavbarTogglerIcon />
      </NavbarToggler>

      <NavbarNav open={menuOpen}>
        <NavLink href="#hero" onClick={() => setMenuOpen(false)}>Início</NavLink>
        <NavLink href="#about" onClick={() => setMenuOpen(false)}>Sobre</NavLink>
        <NavLink href="#services" onClick={() => setMenuOpen(false)}>Serviços</NavLink>
        <NavLink href="#contact" onClick={() => setMenuOpen(false)}>Contato</NavLink>
      </NavbarNav>
    </NavbarContainer>
  );
}

export default Header;
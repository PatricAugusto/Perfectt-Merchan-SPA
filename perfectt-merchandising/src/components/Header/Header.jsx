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
  const [isVisible, setIsVisible] = useState(true); // Novo estado para controlar a visibilidade do Navbar
  const [lastScrollY, setLastScrollY] = useState(0); // Para controlar a direção do scroll

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Lógica para esconder/mostrar o Navbar no scroll
  useEffect(() => {
    const handleScroll = () => {
      // Esconder se rolar para baixo e não estiver no topo
      if (window.scrollY > lastScrollY && window.scrollY > 100) { // + de 100px para evitar sumir em pequenos scrolls
        setIsVisible(false);
      } 
      // Mostrar se rolar para cima ou se estiver muito no topo
      else {
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    // Fechar menu quando a tela for redimensionada para desktop
    const handleResize = () => {
      if (window.innerWidth > 991.98) { 
        setMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);


    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [lastScrollY]); // Dependência para re-executar o efeito quando lastScrollY muda

  return (
    // Passa o estado 'isVisible' para o Styled Component
    <NavbarContainer visible={isVisible}> 
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
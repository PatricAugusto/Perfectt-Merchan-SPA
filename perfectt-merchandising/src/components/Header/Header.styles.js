// src/components/Header/Header.styles.js
import styled from 'styled-components';

export const NavbarContainer = styled.nav`
  /* --- Reintroduzindo Posicionamento Fixo e Centralização --- */
  position: fixed;
  top: 15px; /* Deixa uma pequena margem do topo */
  max-width: 1200px;
  width: 90%;
  left: 50%;
  transform: translateX(-50%);
  
  /* --- Estilos Glassmorphism --- */
  background-color: rgba(0, 0, 0, 0.4); /* Fundo preto com 40% de opacidade */
  backdrop-filter: blur(10px); /* Efeito de desfoque (glassmorphism) */
  -webkit-backdrop-filter: blur(10px); /* Para compatibilidade com navegadores Webkit */
  border: 1px solid rgba(255, 255, 255, 0.1); /* Borda sutil */

  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4);
  border-bottom-left-radius: 25px; 
  border-bottom-right-radius: 25px;
  
  z-index: 1030;
  transition: all 0.3s ease-in-out;
  padding: 1rem 2rem;

  display: flex;
  justify-content: space-between; 
  align-items: center;            

  /* Estilo para esconder/mostrar (será controlado por props no Header.jsx) */
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  pointer-events: ${({ visible }) => (visible ? 'auto' : 'none')}; /* Permite/impede cliques */
  transform: translateX(-50%) translateY(${({ visible }) => (visible ? '0' : '-100%')}); /* Esconde para cima */
  transition: opacity 0.3s ease-out, transform 0.3s ease-out;


  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: calc(100% - 30px); 
    border-radius: 15px;     
    top: 10px;               
    padding: 1rem 1rem;
    
    flex-direction: row; 
    justify-content: space-between; 
  }
`;

export const NavbarNav = styled.div`
  display: flex;
  margin-left: auto; /* Empurra os links para a direita em desktop */
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    flex-direction: column; /* Links em coluna em mobile */
    width: 100%;
    margin-left: 0; /* Remove a margem auto em mobile */
    margin-top: 1rem;
    display: ${({ open }) => (open ? 'flex' : 'none')};
    background-color: ${({ theme }) => theme.colors.black};
    border-radius: 10px;
    padding: 1rem;
    align-items: center; /* Centraliza os links quando em coluna */
  }
`;

export const NavLink = styled.a`
  color: ${({ theme }) => theme.colors.white} !important;
  font-family: ${({ theme }) => theme.fonts.body};
  font-weight: 600;
  margin: 0 1.25rem; /* Espaçamento entre os links */
  font-size: 1.1rem;
  position: relative;
  transition: color 0.3s ease, transform 0.3s ease;
  padding: 0.5rem 0;
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.colors.gold} !important;
    transform: translateY(-2px);
  }

  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 3px;
    bottom: -5px;
    left: 0;
    background-color: ${({ theme }) => theme.colors.gold};
    transition: width 0.3s ease-out;
  }

  &:hover::after {
    width: 100%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    margin: 0.5rem 0; /* Espaçamento vertical entre links em mobile */
    text-align: center;
  }
`;

export const NavbarBrand = styled.a`
  display: inline-block;
  padding-top: 0.3125rem;
  padding-bottom: 0.3125rem;
  margin-right: 1rem;
  line-height: inherit;
  white-space: nowrap;

  img {
    
    transition: transform 0.3s ease;
    width: 120px;
    height: auto;
  }

  &:hover img {
    transform: scale(1.05);
  }
`;

export const NavbarToggler = styled.button`
  display: none;
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: block;
    background: none;
    border: 1px solid rgba(255, 255, 255, 0.2);
    padding: 0.25rem 0.75rem;
    font-size: 1.25rem;
    line-height: 1;
    border-radius: 0.25rem;
    cursor: pointer;
  }
`;

export const NavbarTogglerIcon = styled.span`
  display: inline-block;
  width: 1.5em;
  height: 1.5em;
  vertical-align: middle;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgb%28255, 255, 255%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
`;
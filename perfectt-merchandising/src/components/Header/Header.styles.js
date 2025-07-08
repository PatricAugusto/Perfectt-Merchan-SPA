// src/components/Header/Header.styles.js
import styled from 'styled-components';

export const NavbarContainer = styled.nav`
  background-color: ${({ theme }) => theme.colors.black};
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4);
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  
  /* --- Propriedades de Posicionamento e Centralização --- */
  position: fixed; /* Mantém o Navbar visível durante o scroll */
  width: 90%;      /* Define a largura do Navbar */
  left: 50%;       /* Inicia o elemento no meio da tela */
  transform: translateX(-50%); /* Ajusta o elemento para que seu centro esteja no meio da tela */
  top: 15px;       /* Distância do topo da janela */
  
  /* Garante que não haja interferência de 'left: 0' ou 'right: 0' */
  /* Se você já desinstalou o Bootstrap, o !important aqui pode ser removido,
     mas mantê-lo é uma garantia extra contra heranças inesperadas. */
  right: auto !important; 
  left: auto !important; 
  /* --- Fim das Propriedades de Posicionamento --- */

  z-index: 1030; /* Garante que o Navbar fique acima de outros conteúdos */
  transition: all 0.3s ease-in-out;
  padding: 1rem 2rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: calc(100% - 30px); /* Ajuste de largura para telas menores */
    border-radius: 15px;     /* Arredondamento para todos os cantos em mobile */
    top: 10px;               /* Distância menor do topo em mobile */
    padding: 1rem 1rem;
    right: auto !important;  /* Manter também no mobile */
    left: auto !important;   /* Manter também no mobile */
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
    filter: brightness(0) invert(1);
    transition: transform 0.3s ease;
    width: 180px;
    height: auto;
  }

  &:hover img {
    transform: scale(1.05);
  }
`;

export const NavbarNav = styled.div`
  display: flex;
  margin-left: auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    flex-direction: column;
    width: 100%;
    margin-left: 0;
    margin-top: 1rem;
    /* Adicionar aqui estilos de collapse/expand se o menu estiver fechado/aberto */
    display: ${({ open }) => (open ? 'flex' : 'none')}; /* Controle de visibilidade pelo estado 'open' */
    background-color: ${({ theme }) => theme.colors.black}; /* Fundo para o menu colapsado */
    border-radius: 10px;
    padding: 1rem;
  }
`;

export const NavLink = styled.a`
  color: ${({ theme }) => theme.colors.white} !important;
  font-family: ${({ theme }) => theme.fonts.body};
  font-weight: 600;
  margin-right: 2.5rem;
  font-size: 1.1rem;
  position: relative;
  transition: color 0.3s ease, transform 0.3s ease;
  padding: 0.5rem 0;
  text-decoration: none;

  &:last-child {
    margin-right: 0;
  }

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
    margin-right: 0;
    margin-bottom: 0.5rem;
    text-align: center;
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
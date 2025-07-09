// src/components/Header/Header.styles.js
import styled from 'styled-components';

export const NavbarContainer = styled.nav`
  background-color: ${({ theme }) => theme.colors.black};
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4);
 
   border-bottom-left-radius: 25px; 
   border-bottom-right-radius: 25px; 
  
  position: absolute; 
  top: 0;          
  width: 100%;     
  left: 0;         
  transform: none; 

  z-index: 1030;
  transition: all 0.3s ease-in-out;
  padding: 1rem 2rem;

  /* --- Ajuste para Centralização Interna do Conteúdo --- */
  display: flex;
  flex-direction: row; 
  align-items: center;   
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 100%; 
    border-radius: 0; 
    top: 0;               
    padding: 1rem 1rem;  
    flex-direction: column;
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
    display: ${({ open }) => (open ? 'flex' : 'none')};
    background-color: ${({ theme }) => theme.colors.black};
    border-radius: 10px;
    padding: 1rem;
  }
`;

export const NavLink = styled.a`
  color: ${({ theme }) => theme.colors.white} !important;
  font-family: ${({ theme }) => theme.fonts.body};
  font-weight: 600;
  margin: 0 1.25rem; 
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
    margin: 0.5rem 0; 
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
    filter: brightness(0) invert(1);
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
// src/sections/HeroSection/HeroSection.styles.js
import styled from 'styled-components';
import teamBackground from '../../assets/equipe.png'; 

export const HeroWrapper = styled.section`
  /* Estilos de fundo */
  background-image: url(${teamBackground});
  background-size: cover; 
  background-position: center; 
  background-repeat: no-repeat; 
  background-attachment: fixed; 
  
  /* Adiciona um overlay escuro para melhorar a legibilidade do texto claro */
  position: relative; 
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6); 
    z-index: 1; 
  }

  /* Estilos de conteúdo */
  color: ${({ theme }) => theme.colors.textLight}; 
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  
  /* --- REINTRODUZIDO: padding-top para compensar o Navbar fixo --- */
  padding-top: 80px; /* Ajuste conforme a altura do seu Navbar */

  /* Garante que o conteúdo da seção fique acima do overlay */
  > * { 
    position: relative;
    z-index: 2;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding-top: 60px; /* Ajuste para mobile */
    background-attachment: scroll; 
  }
`;

export const HeroContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`;

export const HeroTitle = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 0.5em;
  color: ${({ theme }) => theme.colors.gold}; 

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 2.5rem;
  }
`;

export const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 1.2rem;
  }
`;

export const HeroButton = styled.a`
  background-color: ${({ theme }) => theme.colors.gold};
  color: ${({ theme }) => theme.colors.black};
  padding: 0.8rem 2rem;
  border-radius: 5px;
  font-weight: bold;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.goldLight};
    transform: translateY(-2px);
  }
`;
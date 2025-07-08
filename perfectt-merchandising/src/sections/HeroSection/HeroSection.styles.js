// src/sections/HeroSection/HeroSection.styles.js
import styled from 'styled-components';

export const HeroWrapper = styled.section`
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.textLight};
  min-height: 100vh; /* Ocupa a altura total da viewport */
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding-top: 80px; /* Espaço para o Navbar fixo */

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding-top: 60px; /* Ajuste para mobile */
  }
`;

export const HeroContent = styled.div`
  max-width: 800px; /* Largura máxima para o conteúdo */
  margin: 0 auto;
  padding: 2rem;
`;

export const HeroTitle = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 0.5em;
  color: ${({ theme }) => theme.colors.gold}; /* Título principal em dourado */

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
  color: ${({ theme }) => theme.colors.black}; /* Texto do botão preto no dourado */
  padding: 0.8rem 2rem;
  border-radius: 5px;
  font-weight: bold;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.goldLight};
    transform: translateY(-2px);
  }
`;
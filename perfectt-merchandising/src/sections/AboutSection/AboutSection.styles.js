// src/sections/AboutSection/AboutSection.styles.js
import styled from 'styled-components';

export const AboutWrapper = styled.section`
  background-color: ${({ theme }) => theme.colors.white}; /* Fundo claro para contraste */
  color: ${({ theme }) => theme.colors.black}; /* Texto escuro para o fundo claro */
  padding: 80px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.black}; /* Linha divisória */
  text-align: center; /* Centraliza o texto dentro da seção */

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 60px 0;
  }
`;

export const AboutContent = styled.div`
  max-width: 960px; /* Simula um container para o conteúdo */
  margin: 0 auto;
  padding: 0 15px; /* Padding interno para as laterais */
`;

export const AboutTitle = styled.h2`
  font-size: 2.8rem;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors.black};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 2rem;
  }
`;

export const AboutText = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 2rem;
  max-width: 700px; /* Limita a largura do parágrafo para melhor legibilidade */
  margin-left: auto;
  margin-right: auto;
`;

export const AboutButton = styled.a`
  background-color: ${({ theme }) => theme.colors.gold};
  color: ${({ theme }) => theme.colors.black};
  padding: 0.8rem 2rem;
  border-radius: 5px;
  font-weight: bold;
  transition: background-color 0.3s ease, transform 0.3s ease;
  display: inline-block; /* Para o padding e margem funcionarem corretamente */

  &:hover {
    background-color: ${({ theme }) => theme.colors.goldLight};
    transform: translateY(-2px);
  }
`;
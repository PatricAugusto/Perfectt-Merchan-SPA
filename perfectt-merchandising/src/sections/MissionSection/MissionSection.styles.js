// src/sections/MissionSection/MissionSection.styles.js
import styled from 'styled-components';

export const MissionWrapper = styled.section`
  background-color: ${({ theme }) => theme.colors.white}; /* Fundo claro para destaque */
  color: ${({ theme }) => theme.colors.black}; /* Texto escuro */
  padding: 80px 0; /* Espaçamento interno */
  text-align: center; /* Centraliza o texto */
  border-top: 1px solid ${({ theme }) => theme.colors.gold}; /* Borda dourada superior */
  border-bottom: 1px solid ${({ theme }) => theme.colors.gold}; /* Borda dourada inferior */

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 60px 0;
  }
`;

export const MissionContent = styled.div`
  max-width: 960px; /* Largura máxima do conteúdo, alinhada com outras seções */
  margin: 0 auto;
  padding: 0 15px; /* Padding interno para telas menores */
`;

export const MissionTitle = styled.h2`
  font-size: 2.8rem;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors.gold}; /* Título em dourado */

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 2rem;
  }
`;

export const MissionText = styled.p`
  font-size: 1.15rem; /* Texto um pouco maior para a missão */
  line-height: 1.8;
  margin-bottom: 2rem;
  max-width: 750px; /* Limita a largura do parágrafo para melhor legibilidade */
  margin-left: auto;
  margin-right: auto;
`;

export const MissionHighlight = styled.p`
  font-size: 1.3rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.black};
  margin-top: 2rem;
  font-style: italic;
`;

// Opcional: Se quiser adicionar um ícone ou elemento visual
// export const MissionIcon = styled.div`
//   font-size: 4rem;
//   color: ${({ theme }) => theme.colors.gold};
//   margin-bottom: 1.5rem;
// `;
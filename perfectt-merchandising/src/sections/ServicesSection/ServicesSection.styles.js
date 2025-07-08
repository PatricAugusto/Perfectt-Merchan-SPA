// src/sections/ServicesSection/ServicesSection.styles.js
import styled from 'styled-components';

export const ServicesWrapper = styled.section`
  background-color: ${({ theme }) => theme.colors.black}; /* Fundo escuro */
  color: ${({ theme }) => theme.colors.textLight}; /* Texto claro */
  padding: 80px 0;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 60px 0;
  }
`;

export const ServicesTitle = styled.h2`
  font-size: 2.8rem;
  margin-bottom: 3rem; /* Mais espaço abaixo do título principal */
  color: ${({ theme }) => theme.colors.gold}; /* Título principal em dourado */

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
`;

export const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); /* Colunas responsivas */
  gap: 30px; /* Espaçamento entre os itens */
  max-width: 1200px; /* Limita a largura da grade */
  margin: 0 auto;
  padding: 0 15px;
`;

export const ServiceCard = styled.div`
  background-color: rgba(255, 255, 255, 0.05); /* Fundo sutil para o card */
  border-radius: 10px;
  padding: 2.5rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px); /* Efeito de elevação no hover */
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4);
  }
`;

export const ServiceIcon = styled.div`
  font-size: 3rem; /* Tamanho do ícone */
  color: ${({ theme }) => theme.colors.gold};
  margin-bottom: 1rem;
`;

export const ServiceTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 0.8rem;
  color: ${({ theme }) => theme.colors.textLight};
`;

export const ServiceDescription = styled.p`
  font-size: 1rem;
  line-height: 1.7;
`;
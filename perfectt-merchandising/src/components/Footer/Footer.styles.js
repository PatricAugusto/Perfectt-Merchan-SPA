// src/components/Footer/Footer.styles.js
import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  background-color: ${({ theme }) => theme.colors.black}; /* MANTIDO como fundo preto */
  border-top: 3px solid ${({ theme }) => theme.colors.gold}; /* Borda superior dourada */
  color: ${({ theme }) => theme.colors.textLight}; /* Texto claro */
  
  padding-top: 60px; 
  padding-bottom: 40px; 
  padding-left: 20px;
  padding-right: 20px;

  text-align: center;
  font-size: 0.9rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding-top: 40px; 
    padding-bottom: 30px;
  }
`;

export const FooterContent = styled.div`
  max-width: 1200px; /* Alinha com a largura máxima do restante do conteúdo */
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const FooterLogo = styled.img`
  width: 150px;
  height: auto;
  // filter: brightness(0) invert(1);
  margin-bottom: 1rem;
`;

export const FooterLinks = styled.div`
  margin-top: 1rem;
  display: flex;
  gap: 1.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

export const FooterLink = styled.a`
  color: ${({ theme }) => theme.colors.textLight};
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.gold};
  }
`;

export const CopyrightText = styled.p`
  margin-top: 2rem;
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.7);
`;
// src/components/Footer/Footer.jsx
import React from 'react';
import {
  FooterWrapper,
  FooterContent,
  FooterLogo,
  FooterLinks,
  FooterLink,
  CopyrightText
} from './Footer.styles';
import logo from '../../assets/perfectt-logo.png'; // Usar o mesmo logo ou uma versão diferente se tiver

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <FooterWrapper>
      <FooterContent>
        <FooterLogo src={logo} alt="Perfectt Merchandising Logo" />
        <p>Transformando visões em realidade visual.</p>
        <FooterLinks>
          {/* Exemplo de links para redes sociais, ajuste os hrefs */}
          <FooterLink href="#" target="_blank" rel="noopener noreferrer">Facebook</FooterLink>
          <FooterLink href="#" target="_blank" rel="noopener noreferrer">Instagram</FooterLink>
          <FooterLink href="#" target="_blank" rel="noopener noreferrer">LinkedIn</FooterLink>
        </FooterLinks>
        <CopyrightText>
          &copy; {currentYear} Perfectt Merchandising. Todos os direitos reservados.
        </CopyrightText>
      </FooterContent>
    </FooterWrapper>
  );
}

export default Footer;
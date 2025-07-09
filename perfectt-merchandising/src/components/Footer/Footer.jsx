// src/components/Footer/Footer.jsx
import React from 'react';
import {
  FooterWrapper, // <--- Importação correta?
  FooterContent,
  FooterLogo,
  FooterLinks,
  FooterLink,
  CopyrightText
} from './Footer.styles'; // <--- Caminho correto para o arquivo de estilos?
import logo from '../../assets/perfectt-logo.png'; 

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <FooterWrapper> {/* <--- Componente Styled aplicado aqui? */}
      <FooterContent>
        <FooterLogo src={logo} alt="Perfectt Merchandising Logo" />
        <p>Transformando visões em realidade visual.</p>
        <FooterLinks>
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
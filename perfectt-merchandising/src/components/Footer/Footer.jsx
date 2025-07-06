// src/components/Footer/Footer.jsx - CORRIGIDO (Opção 1)
import React from 'react';
import { Container } from 'react-bootstrap';

function Footer() {
  return (
    <footer>
      <Container className="text-center py-3">
        <p>&copy; 2025 Perfectt Merchandising. Todos os direitos reservados.</p>
      </Container>
    </footer>
  );
}

export default Footer;
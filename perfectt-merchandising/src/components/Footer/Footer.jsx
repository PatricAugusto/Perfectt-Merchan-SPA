// src/components/Footer/Footer.jsx
import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Para ícones sociais
import styles from './Footer.module.css';
import logo from '../../assets/perfectt-logo.png'; // Reutilizando o logo

function Footer() {
  const currentYear = new Date().getFullYear(); // Obtém o ano atual dinamicamente

  return (
    <footer className={`${styles.footer} py-5`}>
      <Container>
        <Row>
          {/* Coluna do Logo e Breve Descrição */}
          <Col md={4} className="mb-4 mb-md-0 text-center text-md-start">
            <img
              src={logo}
              width="180"
              height="60"
              className="d-inline-block mb-3"
              alt="Perfectt Merchandising Logo"
            />
            <p className="text-muted">
              Soluções inovadoras em merchandising para impulsionar a presença da sua marca.
            </p>
          </Col>

          {/* Coluna de Links Rápidos */}
          <Col md={4} className="mb-4 mb-md-0 text-center">
            <h5 className="mb-3">Links Rápidos</h5>
            <Nav className="flex-column">
              <Nav.Link href="#hero" className="text-muted">Início</Nav.Link>
              <Nav.Link href="#about" className="text-muted">Sobre Nós</Nav.Link>
              <Nav.Link href="#services" className="text-muted">Serviços</Nav.Link>
              <Nav.Link href="#contact" className="text-muted">Contato</Nav.Link>
            </Nav>
          </Col>

          {/* Coluna de Contato e Redes Sociais */}
          <Col md={4} className="text-center text-md-start">
            <h5 className="mb-3">Contato</h5>
            <p className="text-muted">
              Rua Exemplo, 123, Centro<br />
              Chapecó, SC - Brasil
            </p>
            <p className="text-muted">
              Telefone: (49) 1234-5678<br />
              Email: contato@perfectt.com.br
            </p>
            <div className="d-flex justify-content-center justify-content-md-start mt-3">
              <a href="https://facebook.com/perfectt" target="_blank" rel="noopener noreferrer" className={`${styles.socialIcon} me-3`}>
                <FaFacebook size={30} />
              </a>
              <a href="https://instagram.com/perfectt" target="_blank" rel="noopener noreferrer" className={`${styles.socialIcon} me-3`}>
                <FaInstagram size={30} />
              </a>
              <a href="https://linkedin.com/company/perfectt" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                <FaLinkedin size={30} />
              </a>
            </div>
          </Col>
        </Row>
        <hr className="my-4 border-secondary" /> {/* Linha divisória */}
        <Row>
          <Col className="text-center text-muted">
            <p className="mb-0">&copy; {currentYear} Perfectt Merchandising. Todos os direitos reservados.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
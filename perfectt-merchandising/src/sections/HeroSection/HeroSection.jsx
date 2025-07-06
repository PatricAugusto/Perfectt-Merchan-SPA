// src/sections/HeroSection/HeroSection.jsx
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import styles from './HeroSection.module.css'; // Para estilos customizados
import heroBackground from '../../assets/hero-background.png'; // Exemplo: Imagem de fundo

function HeroSection() {
  return (
    <section 
      id="hero" 
      className={`${styles.heroSection} d-flex align-items-center`} // Usamos classes do Bootstrap e nossa classe customizada
      style={{ backgroundImage: `url(${heroBackground})` }} // Adiciona a imagem de fundo
    >
      <Container className="text-center text-white"> {/* Centraliza o texto e define a cor do texto como branca */}
        <Row className="justify-content-center">
          <Col md={10} lg={8}>
            <h1 className="display-3 mb-4 fw-bold">
              Soluções Inovadoras para o Seu Merchandising
            </h1>
            <p className="lead mb-5">
              Transformamos ideias em experiências de marca memoráveis no ponto de venda.
              Sua marca em destaque, sempre.
            </p>
            <Button variant="primary" size="lg" href="#contact" className={styles.ctaButton}>
              Entre em Contato
            </Button>
            <Button variant="outline-light" size="lg" href="#services" className="ms-3">
              Nossos Serviços
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default HeroSection;
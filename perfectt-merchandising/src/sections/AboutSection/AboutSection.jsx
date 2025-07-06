// src/sections/AboutSection/AboutSection.jsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './AboutSection.module.css'; // Para estilos customizados
import teamImage from '../../assets/perfectt-team.png'; // Exemplo: Imagem da equipe

function AboutSection() {
  return (
    <section id="about" className={`${styles.aboutSection} py-5`}> {/* py-5 adiciona padding vertical */}
      <Container>
        <Row className="align-items-center"> {/* Alinha os itens verticalmente no centro */}
          <Col md={6} className="text-center mb-4 mb-md-0"> {/* mb-4 para espaçamento em mobile, mb-md-0 remove em desktop */}
            <img 
              src={teamImage} 
              alt="Equipe Perfectt Merchandising" 
              className="img-fluid rounded shadow-lg" // Classes Bootstrap para imagem responsiva, arredondada e com sombra
            />
          </Col>
          <Col md={6}>
            <h2 className="display-5 fw-bold mb-4">Sobre a Perfectt Merchandising</h2>
            <p className="lead mb-3">
              Na **Perfectt Merchandising**, acreditamos que cada detalhe importa na construção de uma marca forte.
              Fundada com a paixão por transformar produtos em experiências memoráveis, nossa empresa se dedica a
              elevar a presença da sua marca no ponto de venda.
            </p>
            <p className="mb-3">
              Com anos de experiência e uma equipe de especialistas apaixonados, desenvolvemos estratégias de
              merchandising inovadoras e personalizadas. De displays criativos a ativações de marca impactantes,
              nosso objetivo é garantir que sua mensagem não apenas alcance, mas ressoe com o seu público-alvo.
            </p>
            <p>
              Somos movidos pela excelência e pelo compromisso com os resultados dos nossos clientes. Conte com a
              Perfectt Merchandising para dar vida à sua visão e alcançar um destaque inigualável no mercado.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default AboutSection;
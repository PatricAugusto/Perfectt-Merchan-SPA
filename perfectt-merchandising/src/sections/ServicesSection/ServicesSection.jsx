// src/sections/ServicesSection/ServicesSection.jsx
import React from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import styles from './ServicesSection.module.css';

// Importe suas imagens de serviços aqui
// import serviceDisplay from '../../assets/service-display.jpg';
// import serviceAtivacao from '../../assets/service-ativacao.jpg';
// import serviceConsultoria from '../../assets/service-consultoria.jpg';

function ServicesSection() {
  // Array de objetos para representar cada serviço
  const services = [
    {
      id: 1,
      title: 'Criação e Execução de Displays',
      description: 'Desenvolvemos e implementamos displays personalizados que capturam a atenção e destacam seus produtos no ponto de venda, otimizando a experiência do consumidor.',
      // image: serviceDisplay, // Descomente e use sua imagem
    },
    {
      id: 2,
      title: 'Ativação de Marca no PDV',
      description: 'Criamos experiências interativas e envolventes que conectam sua marca ao público-alvo, impulsionando o engajamento e as vendas diretamente no ponto de venda.',
      // image: serviceAtivacao, // Descomente e use sua imagem
    },
    {
      id: 3,
      title: 'Consultoria Estratégica em Merchandising',
      description: 'Oferecemos insights e planos de ação personalizados para otimizar suas estratégias de merchandising, garantindo que cada investimento gere o máximo retorno.',
      // image: serviceConsultoria, // Descomente e use sua imagem
    },
    {
      id: 4,
      title: 'Auditoria e Otimização de Layouts',
      description: 'Analisamos e aprimoramos o layout de suas gôndolas e espaços de venda, maximizando a visibilidade do produto e a jornada de compra do cliente.',
      // image: serviceAuditoria, // Exemplo de imagem para um quarto serviço
    },
  ];

  return (
    <section id="services" className={`${styles.servicesSection} py-5 bg-light`}>
      <Container>
        <Row className="justify-content-center mb-5">
          <Col md={8} className="text-center">
            <h2 className="display-5 fw-bold mb-3">Nossos Serviços</h2>
            <p className="lead">
              Transformamos sua visão em realidade no ponto de venda.
              Explore as soluções que impulsionarão sua marca.
            </p>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col lg={10}>
            <Carousel fade indicators={false} controls={true} className={styles.customCarousel}>
              {services.map(service => (
                <Carousel.Item key={service.id} className={styles.carouselItem}>
                  {/* Se tiver imagem, use a tag img */}
                  {/* {service.image && (
                    <img
                      className="d-block w-100 img-fluid"
                      src={service.image}
                      alt={service.title}
                    />
                  )} */}
                  <div className={styles.overlay}></div> {/* Overlay para o texto se destacar */}
                  <Carousel.Caption className={`${styles.carouselCaption} text-center`}>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    {/* Botão de CTA opcional para cada slide */}
                    {/* <Button variant="light" className="mt-3">Saiba Mais</Button> */}
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default ServicesSection;
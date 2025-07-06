// src/sections/ContactSection/ContactSection.jsx
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import styles from './ContactSection.module.css';

function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState(null); // null, 'success', 'error'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus(null); // Reset status

    // Aqui você integraria com um serviço de backend (API) para enviar o e-mail.
    // Por enquanto, vamos simular um envio bem-sucedido ou falho.

    console.log('Dados do formulário enviados:', formData);

    // Simulação de envio:
    setTimeout(() => {
      const success = Math.random() > 0.3; // 70% de chance de sucesso para o exemplo
      if (success) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' }); // Limpa o formulário
      } else {
        setStatus('error');
      }
    }, 1000); // Simula um atraso de rede
  };

  return (
    <section id="contact" className={`${styles.contactSection} py-5`}>
      <Container>
        <Row className="justify-content-center mb-5">
          <Col md={8} className="text-center">
            <h2 className="display-5 fw-bold mb-3">Entre em Contato</h2>
            <p className="lead">
              Tem um projeto em mente ou gostaria de saber mais sobre nossos serviços?
              Envie-nos uma mensagem!
            </p>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col lg={7}>
            <div className={styles.formContainer}>
              {status === 'success' && (
                <Alert variant="success" className="mb-4">
                  Sua mensagem foi enviada com sucesso! Em breve entraremos em contato.
                </Alert>
              )}
              {status === 'error' && (
                <Alert variant="danger" className="mb-4">
                  Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente mais tarde.
                </Alert>
              )}

              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col md={6}>
                    <Form.Group controlId="formName" className="mb-3">
                      <Form.Label>Nome Completo</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Seu nome"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="formEmail" className="mb-3">
                      <Form.Label>Endereço de E-mail</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="seu@email.com"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group controlId="formPhone" className="mb-3">
                  <Form.Label>Telefone (Opcional)</Form.Label>
                  <Form.Control
                    type="tel"
                    placeholder="(XX) XXXX-XXXX"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group controlId="formSubject" className="mb-3">
                  <Form.Label>Assunto</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Assunto da mensagem"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formMessage" className="mb-4">
                  <Form.Label>Mensagem</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    placeholder="Sua mensagem..."
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Button variant="primary" type="submit" size="lg" className="w-100">
                  Enviar Mensagem
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default ContactSection;
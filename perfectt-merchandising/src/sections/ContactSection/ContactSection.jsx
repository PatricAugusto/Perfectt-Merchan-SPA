// src/sections/ContactSection/ContactSection.jsx
import React from 'react';
import {
  ContactWrapper,
  ContactTitle,
  ContactSubtitle,
  FormContainer,
  FormGroup,
  FormLabel,
  FormInput,
  FormTextarea,
  SubmitButton
} from './ContactSection.styles';

function ContactSection() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para envio do formulário aqui
    alert('Mensagem enviada! (Funcionalidade de envio real precisa ser implementada)');
  };

  return (
    <ContactWrapper id="contact">
      <ContactTitle>Entre em Contato</ContactTitle>
      <ContactSubtitle>
        Tem um projeto em mente ou gostaria de saber mais sobre nossos serviços? Preencha o formulário abaixo e entraremos em contato o mais breve possível.
      </ContactSubtitle>
      <FormContainer>
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <FormLabel htmlFor="name">Nome Completo</FormLabel>
            <FormInput type="text" id="name" placeholder="Seu nome" required />
          </FormGroup>
          <FormGroup>
            <FormLabel htmlFor="email">E-mail</FormLabel>
            <FormInput type="email" id="email" placeholder="seu.email@exemplo.com" required />
          </FormGroup>
          <FormGroup>
            <FormLabel htmlFor="subject">Assunto</FormLabel>
            <FormInput type="text" id="subject" placeholder="Assunto da mensagem" required />
          </FormGroup>
          <FormGroup>
            <FormLabel htmlFor="message">Mensagem</FormLabel>
            <FormTextarea id="message" placeholder="Sua mensagem" rows="5" required />
          </FormGroup>
          <SubmitButton type="submit">Enviar Mensagem</SubmitButton>
        </form>
      </FormContainer>
    </ContactWrapper>
  );
}

export default ContactSection;
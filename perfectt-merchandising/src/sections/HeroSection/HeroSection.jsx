// src/sections/HeroSection/HeroSection.jsx
import React from 'react';
import {
  HeroWrapper,
  HeroContent,
  HeroTitle,
  HeroSubtitle,
  HeroButton
} from './HeroSection.styles';

function HeroSection() {
  return (
    <HeroWrapper id="hero"> {/* Adicione o ID para navegação */}
      <HeroContent>
        <HeroTitle>Sua Marca, Nosso Destino</HeroTitle>
        <HeroSubtitle>Experiências visuais inesquecíveis.</HeroSubtitle>
        <HeroButton href="#contact">Fale Conosco</HeroButton>
      </HeroContent>
    </HeroWrapper>
  );
}
export default HeroSection;
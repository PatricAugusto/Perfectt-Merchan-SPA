// src/sections/AboutSection/AboutSection.jsx
import React from 'react';
import { AboutWrapper, AboutContent, AboutTitle, AboutText, AboutButton } from './AboutSection.styles';

function AboutSection() {
  return (
    <AboutWrapper id="about">
      <AboutContent>
        <AboutTitle>Sobre Nós</AboutTitle>
        <AboutText>
          Na Perfectt Merchandising, transformamos ideias em experiências visuais cativantes. Somos especialistas em criar ambientes que não apenas exibem produtos, mas contam histórias e envolvem o público. Nossa paixão é elevar a sua marca, garantindo que cada detalhe reflita excelência e inovação. Com uma equipe dedicada e apaixonada por design, garantimos que sua mensagem seja vista e sentida.
        </AboutText>
        <AboutButton href="#mission">Nossa Missão</AboutButton> {/* <-- Atualize o href aqui */}
      </AboutContent>
    </AboutWrapper>
  );
}

export default AboutSection;
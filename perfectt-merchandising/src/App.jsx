// src/App.jsx
import React from 'react';
import Header from './components/Header/Header';
import HeroSection from './sections/HeroSection/HeroSection';
import AboutSection from './sections/AboutSection/AboutSection';
import ServicesSection from './sections/ServicesSection/ServicesSection';
import MissionSection from './sections/MissionSection/MissionSection'; // <-- Importe a nova seção
import ContactSection from './sections/ContactSection/ContactSection';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <MissionSection /> {/* <-- Adicione a seção aqui */}
      <ContactSection />
      <Footer />
    </>
  );
}

export default App;
// src/App.jsx (Exemplo)
import React from 'react';
import Header from './components/Header/Header';
import HeroSection from './sections/HeroSection/HeroSection';
import AboutSection from './sections/AboutSection/AboutSection';
import ServicesSection from './sections/ServicesSection/ServicesSection';
import ContactSection from './sections/ContactSection/ContactSection';
import Footer from './components/Footer/Footer'; 

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ContactSection />
      <Footer /> 
    </>
  );
}

export default App;
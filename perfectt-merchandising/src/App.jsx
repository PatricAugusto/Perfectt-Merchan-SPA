// src/App.jsx
import React from 'react';
import Header from './components/Header/Header';
import HeroSection from './sections/HeroSection/HeroSection';
import AboutSection from './sections/AboutSection/AboutSection';
import ServicesSection from './sections/ServicesSection/ServicesSection';
import ContactSection from './sections/ContactSection/ContactSection'; 

import Footer from './components/Footer/Footer';

import './App.css';

function App() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ContactSection /> 
      </main>
      <Footer />
    </>
  );
}

export default App;
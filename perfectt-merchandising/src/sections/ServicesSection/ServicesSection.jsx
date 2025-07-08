// src/sections/ServicesSection/ServicesSection.jsx
import React from 'react';
import {
  ServicesWrapper,
  ServicesTitle,
  ServicesGrid,
  ServiceCard,
  ServiceIcon,
  ServiceTitle,
  ServiceDescription
} from './ServicesSection.styles';
// Se estiver usando ícones, certifique-se de tê-los importados ou de usar SVGs
// Exemplo: import { FaLightbulb, FaTools, FaPaintBrush } from 'react-icons/fa';

function ServicesSection() {
  // Exemplo de dados dos serviços
  const servicesData = [
    {
      icon: '💡', // Substituir por ícone real se usar uma biblioteca
      title: 'Design Criativo',
      description: 'Desenvolvemos conceitos únicos que capturam a essência da sua marca.'
    },
    {
      icon: '🛠️',
      title: 'Produção e Montagem',
      description: 'Executamos com precisão, da fabricação à instalação impecável.'
    },
    {
      icon: '🎨',
      title: 'Gestão de Projetos',
      description: 'Acompanhamos cada etapa para garantir a entrega perfeita e pontual.'
    },
    {
      icon: '✨',
      title: 'Expositores Personalizados',
      description: 'Criação de expositores que maximizam a visibilidade do produto.'
    }
  ];

  return (
    <ServicesWrapper id="services">
      <ServicesTitle>Nossos Serviços</ServicesTitle>
      <ServicesGrid>
        {servicesData.map((service, index) => (
          <ServiceCard key={index}>
            <ServiceIcon>{service.icon}</ServiceIcon>
            <ServiceTitle>{service.title}</ServiceTitle>
            <ServiceDescription>{service.description}</ServiceDescription>
          </ServiceCard>
        ))}
      </ServicesGrid>
    </ServicesWrapper>
  );
}

export default ServicesSection;
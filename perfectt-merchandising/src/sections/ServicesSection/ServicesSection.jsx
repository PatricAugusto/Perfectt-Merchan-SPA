// src/sections/ServicesSection/ServicesSection.jsx
import React from 'react';
import Slider from 'react-slick'; 
import {
  ServicesWrapper,
  ServicesTitle,
  CarouselContainer, 
  CarouselCard, 
  CarouselImage,   
  CarouselDescription, 
} from './ServicesSection.styles';

import designImage from '../../assets/services/expositores1.jpeg';
import producaoImage from '../../assets/services/expositores2.jpeg';
import gestaoImage from '../../assets/services/expositores3.jpeg';
import expositoresImage from '../../assets/services/expositores4.jpeg';

function ServicesSection() {
 
  const servicesData = [
    {
      image: designImage,
      description: 'Desenvolvemos conceitos únicos que capturam a essência da sua marca.'
    },
    {
      image: producaoImage,
      description: 'Executamos com precisão, da fabricação à instalação impecável.'
    },
    {
      image: gestaoImage,
      description: 'Acompanhamos cada etapa para garantir a entrega perfeita e pontual.'
    },
    {
      image: expositoresImage,
      description: 'Criação de expositores que maximizam a visibilidade do produto.'
    }
  ];

  
  const settings = {
    dots: true, 
    infinite: true,
    speed: 500, 
    slidesToShow: 3, 
    slidesToScroll: 1, 
    autoplay: true, 
    autoplaySpeed: 3000,
    arrows: true, 

    responsive: [
      {
        breakpoint: 1024, 
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480, 
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false, 
        }
      }
    ]
  };

  return (
    <ServicesWrapper id="services">
      <ServicesTitle>Nossos Serviços</ServicesTitle>
      <CarouselContainer> 
        <Slider {...settings}> 
          {servicesData.map((service, index) => (
            <CarouselCard key={index}>
              <CarouselImage src={service.image} alt={`Serviço ${index + 1}`} />
              <CarouselDescription>{service.description}</CarouselDescription>
            </CarouselCard>
          ))}
        </Slider>
      </CarouselContainer>
    </ServicesWrapper>
  );
}

export default ServicesSection;
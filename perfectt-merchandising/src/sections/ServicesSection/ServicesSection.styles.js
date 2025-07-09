// src/sections/ServicesSection/ServicesSection.styles.js
import styled from 'styled-components';

export const ServicesWrapper = styled.section`
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.textLight};
  padding: 80px 0;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 60px 0;
  }
`;

export const ServicesTitle = styled.h2`
  font-size: 2.8rem;
  margin-bottom: 3rem;
  color: ${({ theme }) => theme.colors.gold};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
`;

export const CarouselContainer = styled.div`
  max-width: 1200px; 
  margin: 0 auto;
  padding: 0 15px; 

  .slick-list {
    margin: 0 -15px; 
  }

  .slick-slide > div {
    padding: 0 15px;
  }

  .slick-dots {
    bottom: -40px; 
    li button:before {
      font-size: 12px; 
      color: ${({ theme }) => theme.colors.white}; 
      opacity: 0.5;
    }
    li.slick-active button:before {
      color: ${({ theme }) => theme.colors.gold}; 
      opacity: 1;
    }
  }

  /* Estilização das "arrows" (setas) */
  .slick-prev, .slick-next {
    font-size: 0; 
    line-height: 1;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 30px;
    height: 30px;
    padding: 0;
    display: block;
    cursor: pointer;
    color: transparent;
    border: none;
    outline: none;
    background: transparent;
    z-index: 10; 

    &:before {
      font-family: 'slick';
      font-size: 30px;
      line-height: 1;
      opacity: 0.75;
      color: ${({ theme }) => theme.colors.gold}; 
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
  }

  .slick-prev {
    left: -40px; 
    &:before {
      content: '←'; 
    }
  }

  .slick-next {
    right: -40px; 
    &:before {
      content: '→'; 
    }
  }

  /* Ajuste para mobile onde as setas podem ficar muito para fora */
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    .slick-prev {
      left: 0px; 
    }
    .slick-next {
      right: 0px; 
    }
  }
`;

export const CarouselCard = styled.div`
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  display: flex !important; 
  flex-direction: column;
  align-items: center;
  justify-content: space-between; 
  height: 400px; 
  overflow: hidden; 
  margin-bottom: 20px; 
`;

export const CarouselImage = styled.img`
  width: 100%;
  height: 70%; 
  object-fit: cover; 
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const CarouselDescription = styled.p`
  padding: 1rem;
  font-size: 1rem;
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.textLight};
  flex-grow: 1; 
  display: flex;
  align-items: center; 
  justify-content: center; 
  text-align: center;
`;
// src/GlobalStyle.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  /* Reset Básico para consistência */
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: ${({ theme }) => theme.fonts.body};
    color: ${({ theme }) => theme.colors.textLight}; /* Usando a cor do tema */
    background-color: ${({ theme }) => theme.colors.black}; /* Usando a cor do tema */
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.fonts.heading};
    color: ${({ theme }) => theme.colors.textLight}; /* Padrão para títulos em fundo escuro */
    margin-bottom: 0.5em; /* Espaçamento padrão para títulos */
    line-height: 1.2;
  }

  a {
    text-decoration: none;
    color: inherit; /* Links herdam a cor do texto pai por padrão */
  }

  ul {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block; /* Remove espaço extra abaixo de imagens */
  }

  /* Ajustes para o #root do Vite */
  #root {
    /* Remova as propriedades max-width, margin, padding, text-align se elas estiverem conflitantes */
    /* Deixe o body controlar o fundo e o texto */
    /* max-width: 1280px; */
    /* margin: 0 auto; */
    /* padding: 2rem; */
    /* text-align: center; */
  }
`;

export default GlobalStyle;
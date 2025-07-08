// src/theme.js

const theme = {
  colors: {
    black: '#1a1a1a',
    white: '#f8f8f8', // Nosso off-white suave
    gold: '#b8860b',
    goldLight: '#d4af37',
    textDark: '#1a1a1a', // Aponta para black
    textLight: '#f8ff8', // Aponta para white
    textGold: '#b8860b', // Aponta para gold
  },
  fonts: {
    heading: "'Playfair Display', serif",
    body: "'Open Sans', sans-serif",
  },
  // Você pode adicionar mais variáveis aqui, como breakpoints, espaçamentos, etc.
  breakpoints: {
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
  },
};

export default theme;
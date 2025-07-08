// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { ThemeProvider } from 'styled-components';
import theme from './theme'; 
import GlobalStyle from './GlobalStyle';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle /> {/* Adicione seus estilos globais aqui */}
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
// src/index.js ou src/index.jsx

import React from 'react';
import ReactDOM from 'react-dom/client';  // Para criar o root da aplicação
import './index.css'; // Arquivo de estilos
import App from './App'; // Importa o componente principal da sua aplicação

// Cria o root e renderiza o componente 'App' dentro do div com id "root"
const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

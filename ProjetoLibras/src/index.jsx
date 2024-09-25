import React from 'react';
import ReactDOMClient from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { TelaInical } from './screens/TelaInical';
import { Cadastro } from './screens/Cadastro';
import { TranslationPage } from './screens/Tradutor'; // Tela de Tradução

const app = document.getElementById('app');
const root = ReactDOMClient.createRoot(app);

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        {/* Define as rotas */}
        <Route path="/" element={<TelaInical />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/tradutor" element={<TranslationPage />} /> {/* Nova rota para a página de tradução */}
      </Routes>
    </Router>
  </React.StrictMode>
);

import React from 'react';
import ReactDOMClient from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Cadastro } from './screens/Cadastro';
import { Tradutor } from './screens/Tradutor';
import {TelaInicial} from "./screens/TelaInicial/TelaInicial"; // Changed from TranslationPage to Tradutor

const app = document.getElementById('app');
const root = ReactDOMClient.createRoot(app);

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<TelaInicial />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/tradutor" element={<Tradutor />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

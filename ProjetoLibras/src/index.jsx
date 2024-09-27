import React from 'react';
import ReactDOMClient from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { TelaInicial } from './screens/TelaInicial';
import { Cadastro } from './screens/Cadastro';
import { Tradutor } from './screens/Tradutor'; // Tela de Tradução

const app = document.getElementById('app');
const root = ReactDOMClient.createRoot(app);

root.render(
    <React.StrictMode>
        <Router>
            {/* Define as rotas */}
            <Routes>
                <Route path="/" element={<TelaInicial />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/tradutor" element={<Tradutor />} /> {/* Nova rota para a página de tradução */}
            </Routes>
        </Router>
    </React.StrictMode>
);

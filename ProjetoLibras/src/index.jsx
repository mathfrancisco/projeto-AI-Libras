import "../global.css";
import React from "react";
import ReactDOMClient from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { TelaInical } from "./screens/TelaInical"; // Tela Inicial
import { Cadastro } from "./screens/Cadastro";    // Tela de Cadastro (adicione a importação)

// Pega o elemento DOM
const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);

// Renderiza a aplicação com o Router
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        {/* Define as rotas */}
        <Route path="/" element={<TelaInical />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

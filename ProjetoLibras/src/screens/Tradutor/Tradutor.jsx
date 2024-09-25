import React, { useState, useRef } from 'react';

function TranslationPage() {
  const [translationResult, setTranslationResult] = useState('');
  const [textToSign, setTextToSign] = useState('');
  const videoRef = useRef(null);

  // Função para lidar com o envio da captura de vídeo para o backend
  const handleCapture = () => {
    // Aqui você capturaria frames da câmera e enviaria para o backend
    const videoElement = videoRef.current;
    // Enviar vídeo ao backend
    fetch('/api/translate-sign', {
      method: 'POST',
      body: videoElement, // Enviar stream ou frames
    }).then((response) => response.json())
      .then((data) => setTranslationResult(data.text));
  };

  // Função para enviar texto para o backend para tradução em Libras
  const handleTextToSign = () => {
    fetch('/api/translate-text', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: textToSign }),
    }).then((response) => response.json())
      .then((data) => {
        // Aqui você pode exibir a animação dos sinais ou outra representação visual
        console.log('Sign language representation:', data);
      });
  };

  return (
    <div className="translation-page">
      <h1>Libras Translator</h1>
      <div className="video-section">
        <h2>Tradução de Libras para Texto</h2>
        <video ref={videoRef} autoPlay></video>
        <button onClick={handleCapture}>Traduzir Sinais</button>
        <p>Resultado da Tradução: {translationResult}</p>
      </div>

      <div className="text-section">
        <h2>Tradução de Texto para Libras</h2>
        <input
          type="text"
          value={textToSign}
          onChange={(e) => setTextToSign(e.target.value)}
        />
        <button onClick={handleTextToSign}>Traduzir para Libras</button>
        {/* Aqui você pode adicionar o componente de exibição dos sinais */}
      </div>
    </div>
  );
}

export default TranslationPage;

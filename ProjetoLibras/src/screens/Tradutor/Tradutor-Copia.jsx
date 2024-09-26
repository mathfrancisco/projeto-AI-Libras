import React, { useState, useRef, useEffect } from 'react';
import { Circle } from "../../components/Circle";

export function Tradutor() {
  const [translationResult, setTranslationResult] = useState('');
  const [textToSign, setTextToSign] = useState('');
  const [conversationHistory, setConversationHistory] = useState([]);
  const [isCapturing, setIsCapturing] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const storedHistory = JSON.parse(localStorage.getItem('conversationHistory')) || [];
    setConversationHistory(storedHistory);
  }, []);

  const handleCapture = async () => {
    setIsCapturing(true);
    const videoElement = videoRef.current;
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoElement.srcObject = stream;
      videoElement.play();
    } catch (error) {
      console.error('Error accessing camera:', error);
    }
  };

  const stopCapture = () => {
    const videoElement = videoRef.current;
    const stream = videoElement.srcObject;
    if (stream) {
      const tracks = stream.getTracks();
      tracks.forEach(track => track.stop());
      videoElement.srcObject = null;
    }
    setIsCapturing(false);
  };

  const handleTranslate = async () => {
    if (isCapturing) {
      const result = 'Simulated translation from sign language';
      setTranslationResult(result);
      addToHistory(result);
      stopCapture();
    } else if (textToSign) {
      const result = `Sign language representation for: ${textToSign}`;
      setTranslationResult(result);
      addToHistory(result);
      document.getElementById('gesture-display').innerText = `Gestures for: ${textToSign}`;
    }
  };

  const addToHistory = (conversation) => {
    const updatedHistory = [conversation, ...conversationHistory].slice(0, 3);
    setConversationHistory(updatedHistory);
    localStorage.setItem('conversationHistory', JSON.stringify(updatedHistory));
  };

  const handleNewChat = () => {
    setTranslationResult('');
    setTextToSign('');
    stopCapture();
    document.getElementById('gesture-display').innerText = '';
  };

  const handleDeleteLastGeneration = () => {
    if (conversationHistory.length > 0) {
      const updatedHistory = conversationHistory.slice(1);
      setConversationHistory(updatedHistory);
      localStorage.setItem('conversationHistory', JSON.stringify(updatedHistory));
    }
  };

  const handleRegenerateGeneration = () => {
    if (conversationHistory.length > 0) {
      handleTranslate();
    }
  };

  const handleTextToSign = () => {
    console.log('Sending text to backend:', textToSign);
    setTimeout(() => {
      console.log('Sign language representation:', textToSign);
    }, 1000);
  };

  return (
    <div className="bg-[#f0f0f0] flex flex-col justify-center w-full min-h-screen">
      <div className="bg-[#f0f0f0] overflow-hidden w-[1440px] h-[1024px] mx-auto">
        <div className="relative w-full h-full left-0">
          <div className="absolute w-full h-full top-0 left-0">

            {/* Painel Esquerdo */}
            <div className="absolute w-[344px] h-full top-0 left-0 bg-[#3c70e7] rounded-[0px_58px_58px_0px]">
              <div className="absolute w-full h-[173px] top-0 left-0 bg-[#3b59e0] rounded-tl-[58px]" />
              
              <div className="absolute top-[70px] left-[66px] flex flex-col items-start space-y-8">
                <div>
                  <div className="[font-family:'Poppins',Helvetica] font-medium text-white text-base tracking-[0] leading-[normal]">
                    Perfil
                  </div>
                  <p className="font-normal text-xs [font-family:'Poppins',Helvetica] text-white tracking-[0] leading-[normal] mt-1">
                    Lorem ipsum dolor sit amet
                  </p>
                </div>

                {/* Novo Chat */}
                <button onClick={handleNewChat} className="inline-flex items-center justify-center gap-[15px] px-[60px] py-4 bg-[#00a0d1] rounded-[10px] mb-8">
                  <img className="relative w-6 h-6" alt="Gg add" src="https://c.animaapp.com/r9jpr4Nx/img/gg-add.svg" />
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-white text-base tracking-[0] leading-[normal]">
                    Novo Chat
                  </div>
                </button>

                {/* Histórico de Conversas */}
                <div className="space-y-2">
                  <h3 className="text-white text-lg font-semibold">Histórico de Conversas</h3>
                  {conversationHistory.map((conv, index) => (
                    <div key={index} className="text-white text-sm truncate">{conv}</div>
                  ))}
                </div>
              </div>
            </div>

            {/* Área Central com margens uniformes */}
            <div className="ml-[344px] mt-[50px] w-[calc(100%-344px)] pr-8 flex flex-col items-center">

              {/* Exibição de vídeo/gestos */}
              <div className="w-[800px] h-[450px] bg-[#232121] text-white rounded-lg flex items-center justify-center mb-8">
                <video ref={videoRef} className="w-full h-full object-cover" autoPlay muted />
                <div id="gesture-display" className="absolute text-center text-white text-2xl">Gestures will appear here</div>
              </div>

              {/* Campo de texto para Tradução */}
              <div className="w-[800px]">
                <textarea
                  className="w-full h-[100px] p-4 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                  value={textToSign}
                  onChange={(e) => setTextToSign(e.target.value)}
                  placeholder="Digite o texto para traduzir em Libras..."
                />
                <button
                  onClick={handleTranslate}
                  className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-2 mt-4 rounded-lg shadow-lg transition transform hover:scale-105 hover:shadow-xl">
                  Traduzir Texto para Libras
                </button>
              </div>

              {/* Botões de controle de captura */}
              <div className="flex gap-4 mt-8">
                <button
                  onClick={handleCapture}
                  className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-2 rounded-lg shadow-lg transition transform hover:scale-105 hover:shadow-xl">
                  Iniciar Captura
                </button>
                <button
                  onClick={stopCapture}
                  className="bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-2 rounded-lg shadow-lg transition transform hover:scale-105 hover:shadow-xl">
                  Parar Captura
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

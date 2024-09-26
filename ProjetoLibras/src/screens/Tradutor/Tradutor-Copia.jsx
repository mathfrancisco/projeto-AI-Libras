
import React, { useState, useRef, useEffect } from 'react';
import {Circle} from "../../components/Circle";

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
      // Simulate sign language translation
      const result = 'Simulated translation from sign language';
      setTranslationResult(result);
      addToHistory(result);
      stopCapture();
    } else if (textToSign) {
      // Simulate text to sign language translation
      const result = `Sign language representation for: ${textToSign}`;
      setTranslationResult(result);
      addToHistory(result);
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
      <div className="bg-[#f0f0f0] flex flex-row justify-center w-full">
        <div className="bg-[#f0f0f0] overflow-hidden w-[1440px] h-[1024px]">
          <div className="relative w-[1466px] h-[1024px] left-[-26px]">
            <div className="absolute w-[1466px] h-[1024px] top-0 left-0">
              <div className="absolute w-[1099px] h-[243px] top-[781px] left-[367px] bg-[#ffffff0f]" />
              <div className="absolute w-[344px] h-[1024px] top-0 left-[26px] bg-[#3c70e7] rounded-[0px_58px_0px_0px]" />
              <div className="absolute w-[344px] h-[173px] top-0 left-[26px] bg-[#3b59e0]" />

              {/* Painel Esquerdo */}
              <div className="absolute top-[70px] left-[66px] flex flex-col items-start">
                <div className="mb-8">
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

                {/* Imagem de perfil */}
                <img className="w-14 h-14 object-cover mb-8" alt="Ellipse" src="https://c.animaapp.com/r9jpr4Nx/img/ellipse-3.png" />

                {/* Histórico de Conversas */}
                <div className="mb-8">
                  <h3 className="text-white text-lg font-semibold mb-2">Histórico de Conversas</h3>
                  {conversationHistory.map((conv, index) => (
                      <div key={index} className="text-white text-sm mb-1 truncate">{conv}</div>
                  ))}
                </div>

                {/* Outros botões */}
                <button onClick={() => handleNavigation('/settings')} className="inline-flex items-center justify-center gap-3.5 mb-4">
                  <img className="relative w-6 h-6" alt="Settings" src="https://c.animaapp.com/r9jpr4Nx/img/settings-icon.svg" />
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-white text-base tracking-[0] leading-[normal]">
                    Configurações
                  </div>
                </button>

                <button onClick={() => handleNavigation('/guides-and-faq')} className="inline-flex items-center justify-center gap-3.5 mb-4">
                  <img className="relative w-6 h-6" alt="Question" src="https://c.animaapp.com/r9jpr4Nx/img/question-1.svg" />
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-white text-base tracking-[0] leading-[normal]">
                    Guias e FAQ
                  </div>
                </button>

                <button onClick={() => handleNavigation('/upgrade')} className="inline-flex items-center justify-center gap-[13px] mb-4">
                  <img className="relative w-6 h-6" alt="Integration" src="https://c.animaapp.com/r9jpr4Nx/img/integration-1.svg" />
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-white text-base tracking-[0] leading-[normal]">
                    Upgrade
                  </div>
                </button>

                <button onClick={() => handleNavigation('/')} className="inline-flex items-center justify-center gap-4">
                  <img className="relative w-6 h-6" alt="Majesticons logout" src="https://c.animaapp.com/r9jpr4Nx/img/majesticons-logout-line.svg" />
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-white text-base tracking-[0] leading-[normal]">
                    Sair
                  </div>
                </button>
              </div>

              {/* Área de vídeo e tradução */}
              <div className="flex w-[694px] items-start gap-[30px] px-[30px] py-5 absolute top-[456px] left-[545px] bg-[#232121] border-l-2 [border-left-style:solid] border-[#4c5ea1]">
                <Circle avatar="twenty-seven" className="!h-[70px] bg-[url(https://c.animaapp.com/r9jpr4Nx/img/image-77@2x.png)] !w-[70px]" />
                <div className="relative w-[554px] h-[71px] mt-[-2.00px] mr-[-20.00px] [font-family:'Poppins',Helvetica] font-medium text-neutral-300 text-base tracking-[0] leading-[normal]">
                  <video ref={videoRef} className="w-full h-40 mb-4" autoPlay muted />
                  <button onClick={handleCapture} className="bg-blue-500 text-white px-4 py-2 rounded">Iniciar Captura</button>
                  <button on

                          Click={stopCapture} className="bg-red-500 text-white px-4 py-2 rounded ml-2">Parar Captura</button>
                  <button onClick={handleTranslate} className="bg-green-500 text-white px-4 py-2 rounded ml-2">Traduzir</button>
                </div>
              </div>

              {/* Resultado da tradução */}
              <div className="absolute w-[750px] h-[71px] top-[770px] left-[545px]">
                <h2 className="text-white text-lg font-semibold">Resultado da Tradução:</h2>
                <div className="text-white text-base mt-2">{translationResult}</div>
              </div>

              {/* Botões de histórico */}
              <div className="absolute flex gap-2 top-[908px] left-[543px]">
                <button onClick={handleDeleteLastGeneration} className="bg-red-500 text-white px-4 py-2 rounded">Deletar Última Geração</button>
                <button onClick={handleRegenerateGeneration} className="bg-yellow-500 text-white px-4 py-2 rounded">Regenerar Última Geração</button>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

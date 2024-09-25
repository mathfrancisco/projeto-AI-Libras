import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Circle } from "../../components/Circle";

export function Tradutor() {
  const [translationResult, setTranslationResult] = useState('');
  const [textToSign, setTextToSign] = useState('');
  const [conversationHistory, setConversationHistory] = useState([]);
  const [isCapturing, setIsCapturing] = useState(false);
  const videoRef = useRef(null);
  const navigate = useNavigate();

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
    const tracks = stream.getTracks();
    tracks.forEach(track => track.stop());
    videoElement.srcObject = null;
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
      const lastGeneration = conversationHistory[0];
      handleTranslate();
    }
  };

  const handleNavigation = (path) => {
    navigate(path);
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
            
            {/* Botões inferiores */}
            <div className="absolute w-[729px] h-[41px] top-[844px] left-[572px]">
              <button onClick={handleDeleteLastGeneration} className="inline-flex items-center justify-center gap-2 px-4 py-2.5 absolute top-0 left-0 bg-[#fb232330] rounded-md">
                <img className="relative w-4 h-[18px]" alt="Vector" src="https://c.animaapp.com/r9jpr4Nx/img/vector-5.svg" />
                <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-[#fb2323] text-sm tracking-[0] leading-[normal]">
                  Delete last generation
                </div>
              </button>
              <button onClick={handleRegenerateGeneration} className="inline-flex items-center justify-center gap-2.5 px-4 py-2.5 absolute top-0 left-[236px] bg-[#11b06333] rounded-md">
                <img className="relative w-[14.81px] h-[18px]" alt="Vector" src="https://c.animaapp.com/r9jpr4Nx/img/vector-6.svg" />
                <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-[#11b063] text-sm tracking-[0] leading-[normal]">
                  Regenerate Generation
                </div>
              </button>
              <div className="inline-flex items-center justify-center gap-2.5 absolute top-2.5 left-[535px]">
                <div className="inline-flex items-center justify-center gap-2.5 relative flex-[0_0_auto]">
                  <img className="relative w-[19.5px] h-[19.5px] ml-[-0.75px]" alt="Group" src="https://c.animaapp.com/r9jpr4Nx/img/group@2x.png" />
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-[#1e1e1e] text-sm tracking-[0] leading-[normal]">
                    Palavras Usadas: 12000
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Área de vídeo e tradução */}
          <div className="flex w-[694px] items-start gap-[30px] px-[30px] py-5 absolute top-[456px] left-[545px] bg-[#232121] border-l-2 [border-left-style:solid] border-[#4c5ea1]">
            <Circle avatar="twenty-seven" className="!h-[70px] bg-[url(https://c.animaapp.com/r9jpr4Nx/img/image-77@2x.png)] !w-[70px]" />
            <div className="relative w-[554px] h-[71px] mt-[-2.00px] mr-[-20.00px] [font-family:'Poppins',Helvetica] font-medium text-neutral-300 text-base tracking-[0] leading-[normal]">
              <video ref={videoRef} className="w-full h-40 mb-4" autoPlay muted />
              <p>{translationResult}</p>
            </div>
          </div>

          {/* Barra de pesquisa melhorada com botão de captura */}
          <div className="absolute w-[694px] h-14 top-[916px] left-[573px]">
            <div className="relative h-14 rounded-[10px] shadow-md">
              <div className="flex w-[694px] items-center px-[30px] py-4 absolute top-0 left-0 rounded-[10px] border border-solid border-[#4454904a] bg-white">
                <img className="w-6 h-6 mr-[8px] text-gray-400" alt="Search" src="https://c.animaapp.com/r9jpr4Nx/img/material-symbols-search.svg" />
                <input
                  type="text"
                  value={textToSign}
                  onChange={(e) => setTextToSign(e.target.value)}
                  placeholder="Traduza qualquer texto para Libras ou Libras para texto"
                  className="w-full bg-transparent text-gray-700 font-medium text-base outline-none placeholder-gray-400"
                />
              </div>
              <button
                onClick={isCapturing ? handleTranslate : handleCapture}
                className="absolute w-14 h-14 top-0 right-[56px] bg-[#3b59e0] rounded-l-none rounded-r-none flex items-center justify-center transition-colors duration-300 hover:bg-[#2c4ac2]"
              >
                <img
                  className="w-8 h-[35px]"
                  alt={isCapturing ? "Stop" : "Capture"}
                  src={isCapturing ? "https://c.animaapp.com/r9jpr4Nx/img/stop-icon.svg" : "https://c.animaapp.com/r9jpr4Nx/img/camera-icon.svg"}
                />
              </button>
              <button
                onClick={handleTranslate}
                className="absolute w-14 h-14 top-0 right-0 bg-[#3b59e0] rounded-r-[10px] flex items-center justify-center transition-colors duration-300 hover:bg-[#2c4ac2]"
              >
                <img className="w-8 h-[35px]" alt="Send" src="https://c.animaapp.com/r9jpr4Nx/img/vector-7.svg" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

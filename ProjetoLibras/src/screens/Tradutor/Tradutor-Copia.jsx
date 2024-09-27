import React, { useState, useRef, useEffect } from 'react';
import * as tf from "@tensorflow/tfjs";
import * as poseNet from "@tensorflow-models/posenet";
import { Circle } from "../../components/Circle";

// Função principal do componente Tradutor
export function Tradutor() {
  // Estados para armazenar informações importantes
  const [translationResult, setTranslationResult] = useState(''); // Resultado da tradução
  const [textToSign, setTextToSign] = useState(''); // Texto para ser traduzido em linguagem de sinais
  const [conversationHistory, setConversationHistory] = useState([]); // Histórico de conversas
  const [isCapturing, setIsCapturing] = useState(false); // Estado de captura de vídeo
  
  // Referências para elementos de vídeo e canvas
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  // Efeito que é executado quando o componente é montado
  useEffect(() => {
    // Carrega o histórico de conversas do armazenamento local
    const storedHistory = JSON.parse(localStorage.getItem('conversationHistory')) || [];
    setConversationHistory(storedHistory);
    
    // Inicia o modelo PoseNet para detecção de poses
    runPoseNet();
  }, []);

  // Função para iniciar o modelo PoseNet
  const runPoseNet = async () => {
    const model = await poseNet.load();
    setInterval(() => {
      detectPose(model);
    }, 100);
  };

  // Função para detectar poses usando o PoseNet
  const detectPose = async (model) => {
    if (videoRef.current && videoRef.current.readyState === 4) {
      const video = videoRef.current;
      const videoWidth = videoRef.current.videoWidth;
      const videoHeight = videoRef.current.videoHeight;

      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      const poses = await model.estimatePoses(video);
      drawPoses(poses, canvasRef.current.getContext("2d"));
    }
  };

  // Função para desenhar as poses detectadas no canvas
  const drawPoses = (poses, ctx) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    poses.forEach((pose) => {
      pose.keypoints.forEach((keypoint) => {
        ctx.beginPath();
        ctx.arc(keypoint.position.x, keypoint.position.y, 5, 0, 2 * Math.PI);
        ctx.fillStyle = 'red';
        ctx.fill();
      });
    });
  };

  // Função para iniciar a captura de vídeo
  const handleCapture = async () => {
    setIsCapturing(true);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;
      videoRef.current.play();
    } catch (error) {
      console.error('Erro ao acessar a câmera:', error);
    }
  };

  // Função para parar a captura de vídeo
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

  // Função para realizar a tradução
  const handleTranslate = async () => {
    if (isCapturing) {
      // Simulação de tradução de linguagem de sinais para texto
      const result = 'Tradução simulada da linguagem de sinais';
      setTranslationResult(result);
      addToHistory(result);
      stopCapture();
    } else if (textToSign) {
      // Simulação de tradução de texto para linguagem de sinais
      const result = `Representação em linguagem de sinais para: ${textToSign}`;
      setTranslationResult(result);
      addToHistory(result);
    }
  };

  // Função para adicionar uma nova conversa ao histórico
  const addToHistory = (conversation) => {
    const updatedHistory = [conversation, ...conversationHistory].slice(0, 3);
    setConversationHistory(updatedHistory);
    localStorage.setItem('conversationHistory', JSON.stringify(updatedHistory));
  };

  // Função para iniciar um novo chat
  const handleNewChat = () => {
    setTranslationResult('');
    setTextToSign('');
    stopCapture();
  };

  // Função para excluir a última geração do histórico
  const handleDeleteLastGeneration = () => {
    if (conversationHistory.length > 0) {
      const updatedHistory = conversationHistory.slice(1);
      setConversationHistory(updatedHistory);
      localStorage.setItem('conversationHistory', JSON.stringify(updatedHistory));
    }
  };

  // Função para regenerar a última tradução
  const handleRegenerateGeneration = () => {
    if (conversationHistory.length > 0) {
      handleTranslate();
    }
  };

  // Renderização do componente
  return (
    <div className="bg-[#f0f0f0] flex flex-row justify-center w-full">
      <div className="bg-[#f0f0f0] overflow-hidden w-[1440px] h-[1024px]">
        <div className="relative w-[1466px] h-[1024px] left-[-26px]">
          <div className="absolute w-[1466px] h-[1024px] top-0 left-0">
            <div className="absolute w-[1099px] h-[243px] top-[781px] left-[367px] bg-[#ffffff0f]" />
            <div className="absolute w-[344px] h-[1024px] top-0 left-[26px] bg-[#3c70e7] rounded-[0px_58px_0px_0px]" />
            <div className="absolute w-[344px] h-[173px] top-0 left-[26px] bg-[#3b59e0]" />
            <div className="inline-flex items-center justify-center gap-[15px] absolute top-[222px] left-[70px]">
              <img
                className="relative w-5 h-[19.5px]"
                alt="Vector"
                src="https://c.animaapp.com/r9jpr4Nx/img/vector-4.svg"
              />
              <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-white text-base tracking-[0] leading-[normal]">
                Histórico de Conversas
              </div>
            </div>
            <div className="absolute top-[70px] left-[139px] [font-family:'Poppins',Helvetica] font-medium text-white text-base tracking-[0] leading-[normal]">
              Perfil
            </div>
            <p className="absolute top-[94px] left-[139px] font-normal text-xs [font-family:'Poppins',Helvetica] text-white tracking-[0] leading-[normal]">
              Lorem ipsum dolor sit amet
            </p>
            <button
              onClick={handleNewChat}
              className="inline-flex items-center justify-center gap-[15px] px-[60px] py-4 absolute top-[839px] left-[51px] bg-[#00a0d1] rounded-[10px]"
            >
              <img className="relative w-6 h-6" alt="Gg add" src="https://c.animaapp.com/r9jpr4Nx/img/gg-add.svg" />
              <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-white text-base tracking-[0] leading-[normal]">
                Novo Chat
              </div>
            </button>
            {/* Exibição do histórico de conversas */}
            {conversationHistory.map((conv, index) => (
              <div key={index} className="absolute top-[273px] left-0 bg-[#324383] w-[370px] pl-[85px] pr-10 py-5">
                <div className="inline-flex items-center justify-center gap-[15px] relative flex-[0_0_auto] ml-[-13.50px]">
                  <img
                    className="relative w-5 h-[19.5px]"
                    alt="Vector"
                    src="https://c.animaapp.com/r9jpr4Nx/img/vector-1.svg"
                  />
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-white text-base tracking-[0] leading-[normal]">
                    {conv}
                  </div>
                </div>
              </div>
            ))}
            <img
              className="absolute w-14 h-14 top-[66px] left-[66px] object-cover"
              alt="Ellipse"
              src="https://c.animaapp.com/r9jpr4Nx/img/ellipse-3.png"
            />
            <div className="absolute w-[729px] h-[41px] top-[844px] left-[572px]">
              <button
                onClick={handleDeleteLastGeneration}
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 absolute top-0 left-0 bg-[#fb232330] rounded-md"
              >
                <img
                  className="relative w-4 h-[18px]"
                  alt="Vector"
                  src="https://c.animaapp.com/r9jpr4Nx/img/vector-5.svg"
                />
                <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-[#fb2323] text-sm tracking-[0] leading-[normal]">
                  Delete last generation
                </div>
              </button>
              <button
                onClick={handleRegenerateGeneration}
                className="inline-flex items-center justify-center gap-2.5 px-4 py-2.5 absolute top-0 left-[236px] bg-[#11b06333] rounded-md"
              >
                <img
                  className="relative w-[14.81px] h-[18px]"
                  alt="Vector"
                  src="https://c.animaapp.com/r9jpr4Nx/img/vector-6.svg"
                />
                <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-[#11b063] text-sm tracking-[0] leading-[normal]">
                  Regenerate Generation
                </div>
              </button>
              <div className="inline-flex items-center justify-center gap-2.5 absolute top-2.5 left-[535px]">
                <div className="inline-flex items-center justify-center gap-2.5 relative flex-[0_0_auto]">
                  <img
                    className="relative w-[19.5px] h-[19.5px] ml-[-0.75px]"
                    alt="Group"
                    src="https://c.animaapp.com/r9jpr4Nx/img/group@2x.png"
                  />
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-[#1e1e1e] text-sm tracking-[0] leading-[normal]">
                    Palavras Usadas: 12000
                  </div>
                </div>
              </div>
            </div>
            <img
              className="absolute w-[164px] h-[58px] top-[914px] left-[92px]"
              alt="Frame"
              src="https://c.animaapp.com/r9jpr4Nx/img/frame-16.png"
            />
          </div>
          {/* Área de exibição do vídeo e resultado da tradução */}
          <div className="flex w-[694px] items-start gap-[30px] px-[30px] py-5 absolute top-[456px] left-[545px] bg-[#232121] border-l-2 [border-left-style:solid] border-[#4c5ea1]">
            <Circle
              avatar="twenty-seven"
              className="!h-[70px] bg-[url(https://c.animaapp.com/r9jpr4Nx/img/image-77@2x.png)] !w-[70px]"
            />
            <div className="relative w-[554px] h-[71px] mt-[-2.00px] mr-[-20.00px] [font-family:'Poppins',Helvetica] font-medium text-neutral-300 text-base tracking-[0] leading-[normal]">
              <div className="w-full h-[300px] relative">
                <video ref={videoRef} className="w-full h-full object-cover" autoPlay muted />
                <canvas
                  ref={canvasRef}
                  className="absolute top-0 left-0 w-full h-full"
                />
              </div>
              <button onClick={handleCapture} className="bg-blue-500 text-white px-4 py-2 rounded mb-4 mt-4">
                {isCapturing ? 'Parar Captura' : 'Iniciar Captura'}
              </button>
              <p>{translationResult}</p>
            </div>
          </div>

          {/* Campo de entrada para texto a ser traduzido */}
          <div className="absolute w-[694px] h-14 top-[916px] left-[573px]">
            <div className="relative h-14 rounded-[10px]">
              <div className="flex w-[694px] items-center px-[30px] py-4 absolute top-0 left-0 rounded-[10px] border border-solid border-[#4454904a]">
                <img
                  className="w-6 h-6 mr-[8px]"
                  alt="Search"
                  src="https://c.animaapp.com/r9jpr4Nx/img/material-symbols-search.svg"
                />
                <input
                  type="text"
                  value={textToSign}
                  onChange={(e) => setTextToSign(e.target.value)}
                  placeholder="Traduza qualquer texto para Libras ou Libras para texto"
                  className="w-full bg-transparent text-[#44549078] font-medium text-base outline-none"
                />
              </div>
              <button
                onClick={handleTranslate}
                className="absolute w-14 h-14 top-0 right-

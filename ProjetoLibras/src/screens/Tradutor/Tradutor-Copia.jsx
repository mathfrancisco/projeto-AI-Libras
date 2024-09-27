// Importando as bibliotecas necessárias
import React, { useState, useRef, useEffect } from 'react';
import * as tf from "@tensorflow/tfjs";
import * as handpose from "@tensorflow-models/handpose";
import Webcam from "react-webcam";
import { drawHand, drawRect } from "./utilities";
import { Circle } from "../../components/Circle";

// Definindo o componente principal Tradutor
export function Tradutor() {
  // Estados para gerenciar os dados da aplicação
  const [translationResult, setTranslationResult] = useState('');
  const [textToSign, setTextToSign] = useState('');
  const [conversationHistory, setConversationHistory] = useState([]);
  const [isCapturing, setIsCapturing] = useState(false);
  const [model, setModel] = useState(null);
  const [librasModel, setLibrasModel] = useState(null);
  const [error, setError] = useState(null);
  
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const storedHistory = JSON.parse(localStorage.getItem('conversationHistory')) || [];
    setConversationHistory(storedHistory);
    loadModels();
  }, []);

  const loadModels = async () => {
    try {
      const loadedHandModel = await handpose.load();
      setModel(loadedHandModel);
      console.log("Modelo de detecção de mãos carregado.");

      // Carregando o modelo de reconhecimento de gestos de Libras
      const loadedLibrasModel = await tf.loadLayersModel('path/to/libras/model');
      setLibrasModel(loadedLibrasModel);
      console.log("Modelo de reconhecimento de Libras carregado.");
    } catch (error) {
      console.error("Erro ao carregar os modelos:", error);
      setError("Falha ao carregar os modelos. Por favor, recarregue a página.");
    }
  };

  const runHandpose = async () => {
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      const hand = await model.estimateHands(video);

      const ctx = canvasRef.current.getContext("2d");
      drawHand(hand, ctx);

      return hand;
    }
  };

  // Nova função para reconhecer gestos
  const recognizeGesture = (hand) => {
    // Processar os dados da mão e usar o modelo para reconhecer o gesto
    const processedData = processHandData(hand);
    const gesture = librasModel.predict(processedData);
    return interpretGestureResult(gesture);
  };

  // Nova função para processar os dados da mão
  const processHandData = (hand) => {
    // Implementar a lógica de processamento dos dados da mão
    // Retornar os dados no formato esperado pelo modelo de Libras
  };

  // Nova função para interpretar o resultado do gesto
  const interpretGestureResult = (gesture) => {
    // Implementar a lógica para interpretar o resultado do modelo
    // Retornar o gesto reconhecido em um formato utilizável
  };

  const handleCapture = async () => {
    setIsCapturing(true);
    if (webcamRef.current) {
      webcamRef.current.video.play();
    }
  };

  const stopCapture = () => {
    setIsCapturing(false);
    if (webcamRef.current) {
      webcamRef.current.video.pause();
    }
  };

  const captureAndDetect = async () => {
    try {
      const hand = await runHandpose();
      const recognizedGesture = recognizeGesture(hand);
      const translation = mapGestureToText(recognizedGesture);
      setTranslationResult(translation);
      addToHistory(translation);
    } catch (error) {
      setError(`Ocorreu um erro na detecção: ${error.message}. Por favor, tente novamente.`);
      console.error('Erro detalhado:', error);
    }
  };

  // Nova função para mapear gesto para texto
  const mapGestureToText = (gesture) => {
    // Implementar a lógica para converter o gesto reconhecido em texto
    // Retornar o texto correspondente ao gesto
  };

  const handleTranslate = async () => {
    setError(null);
    try {
      if (isCapturing) {
        await captureAndDetect();
        stopCapture();
      } else if (textToSign) {
        const translation = await translateTextToLibras(textToSign);
        setTranslationResult(translation);
        addToHistory(translation);
      }
    } catch (error) {
      setError(`Ocorreu um erro na tradução: ${error.message}. Por favor, tente novamente.`);
      console.error('Erro detalhado:', error);
    }
  };

  // Nova função para traduzir texto para Libras
  const translateTextToLibras = async (text) => {
    // Implementar a lógica para converter texto em uma sequência de gestos de Libras
    // Pode envolver a renderização de animações ou uso de um avatar
    // Retornar uma representação dos gestos de Libras
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
    setError(null);
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

  useEffect(() => {
    if (isCapturing && webcamRef.current && canvasRef.current) {
      const interval = setInterval(async () => {
        const hand = await runHandpose();
        const ctx = canvasRef.current.getContext('2d');
        drawHand(hand, ctx);
        if (hand && hand.length > 0) {
          const gesture = recognizeGesture(hand[0]);
          drawRect([gesture.box], [gesture.class], [gesture.score], 0.8, webcamRef.current.video.videoWidth, webcamRef.current.video.videoHeight, ctx);
        }
      }, 100);
      return () => clearInterval(interval);
    }
  }, [isCapturing, model, librasModel]);

  // Retornando a interface do usuário (UI)
  return (
    <div className="bg-[#f0f0f0] flex flex-row justify-center w-full">
      <div className="bg-[#f0f0f0] overflow-hidden w-[1440px] h-[1024px]">
        <div className="relative w-[1466px] h-[1024px] left-[-26px]">
          {/* Barra lateral esquerda */}
          <div className="absolute w-[344px] h-[1024px] top-0 left-[26px] bg-[#3c70e7] rounded-[0px_58px_0px_0px]">
            {/* Cabeçalho da barra lateral */}
            <div className="absolute w-[344px] h-[173px] top-0 left-0 bg-[#3b59e0]" />
            
            {/* Perfil do usuário */}
            <img
              className="absolute w-14 h-14 top-[66px] left-[66px] object-cover"
              alt="Foto de perfil"
              src="https://c.animaapp.com/r9jpr4Nx/img/ellipse-3.png"
            />
            <div className="absolute top-[70px] left-[139px] [font-family:'Poppins',Helvetica] font-medium text-white text-base tracking-[0] leading-[normal]">
              Perfil
            </div>
            <p className="absolute top-[94px] left-[139px] font-normal text-xs [font-family:'Poppins',Helvetica] text-white tracking-[0] leading-[normal]">
              Lorem ipsum dolor sit amet
            </p>

            {/* Histórico de Conversas */}
            <div className="inline-flex items-center justify-center gap-[15px] absolute top-[222px] left-[70px]">
              <img
                className="relative w-5 h-[19.5px]"
                alt="Ícone de histórico"
                src="https://c.animaapp.com/r9jpr4Nx/img/vector-4.svg"
              />
              <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-white text-base tracking-[0] leading-[normal]">
                Histórico de Conversas
              </div>
            </div>

            {/* Lista de conversas do histórico */}
            {conversationHistory.map((conv, index) => (
              <div key={index} className="absolute top-[273px] left-0 bg-[#324383] w-[370px] pl-[85px] pr-10 py-5">
                <div className="inline-flex items-center justify-center gap-[15px] relative flex-[0_0_auto] ml-[-13.50px]">
                  <img
                    className="relative w-5 h-[19.5px]"
                    alt="Ícone de conversa"
                    src="https://c.animaapp.com/r9jpr4Nx/img/vector-1.svg"
                  />
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-white text-base tracking-[0] leading-[normal]">
                    {conv}
                  </div>
                </div>
              </div>
            ))}

            {/* Botão de Novo Chat */}
            <button
              onClick={handleNewChat}
              className="inline-flex items-center justify-center gap-[15px] px-[60px] py-4 absolute top-[839px] left-[51px] bg-[#00a0d1] rounded-[10px]"
            >
              <img className="relative w-6 h-6" alt="Ícone de adicionar" src="https://c.animaapp.com/r9jpr4Nx/img/gg-add.svg" />
              <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-white text-base tracking-[0] leading-[normal]">
                Novo Chat
              </div>
            </button>

            {/* Logo ou marca d'água */}
            <img
              className="absolute w-[164px] h-[58px] top-[914px] left-[92px]"
              alt="Logo"
              src="https://c.animaapp.com/r9jpr4Nx/img/frame-16.png"
            />
          </div>

          {/* Área principal de conteúdo */}
          <div className="absolute w-[1099px] h-[243px] top-[781px] left-[367px] bg-[#ffffff0f]" />

           {/* Área de captura de vídeo e tradução */}
          <div className="flex w-[694px] items-start gap-[30px] px-[30px] py-5 absolute top-[456px] left-[545px] bg-[#232121] border-l-2 [border-left-style:solid] border-[#4c5ea1]">
            <Circle
              avatar="twenty-seven"
              className="!h-[70px] bg-[url(https://c.animaapp.com/r9jpr4Nx/img/image-77@2x.png)] !w-[70px]"
            />
            <div className="relative w-[554px] h-[71px] mt-[-2.00px] mr-[-20.00px] [font-family:'Poppins',Helvetica] font-medium text-neutral-300 text-base tracking-[0] leading-[normal]">
              <div className="w-full h-[300px] relative">
                <Webcam
                  ref={webcamRef}
                  className="w-full h-full object-cover"
                  mirrored={true}
                />
                <canvas
                  ref={canvasRef}
                  className="absolute top-0 left-0 w-full h-full"
                />
              </div>
              <button 
                onClick={isCapturing ? stopCapture : handleCapture} 
                className="bg-blue-500 text-white px-4 py-2 rounded mb-4 mt-4"
              >
                {isCapturing ? 'Parar Captura' : 'Iniciar Captura'}
              </button>
              {error && <p className="text-red-500">{error}</p>}
              <p>{translationResult}</p>
            </div>
          </div>

          {/* Área de entrada de texto e botão de tradução */}
          <div className="absolute w-[694px] h-14 top-[916px] left-[573px]">
            <div className="relative h-14 rounded-[10px]">
              <div className="flex w-[694px] items-center px-[30px] py-4 absolute top-0 left-0 rounded-[10px] border border-solid border-[#4454904a]">
                <img
                  className="w-6 h-6 mr-[8px]"
                  alt="Ícone de busca"
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
                className="absolute w-14 h-14 top-0 right-0 bg-[#11b063] rounded-[10px] flex items-center justify-center"
              >
                <img
                  className="w-8 h-8"
                  alt="Ícone de enviar"
                  src="https://c.animaapp.com/r9jpr4Nx/img/material-symbols-send.svg"
                />
              </button>
            </div>
          </div>

          {/* Botões de controle adicionais */}
           <div className="absolute w-[729px] h-[41px] top-[844px] left-[572px]">
            <button
              onClick={handleDeleteLastGeneration}
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 absolute top-0 left-0 bg-[#fb232330] rounded-md"
            >
              <img
                className="relative w-4 h-[18px]"
                alt="Ícone de deletar"
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
                alt="Ícone de regenerar"
                src="https://c.animaapp.com/r9jpr4Nx/img/vector-6.svg"
              />
              <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-[#11b063] text-sm tracking-[0] leading-[normal]">
                Regenerate Generation
              </div>
            </button>
            {/* Contador de palavras usadas */}
            <div className="inline-flex items-center justify-center gap-2.5 absolute top-2.5 left-[535px]">
              <div className="inline-flex items-center justify-center gap-2.5 relative flex-[0_0_auto]">
                <img
                  className="relative w-[19.5px] h-[19.5px] ml-[-0.75px]"
                  alt="Ícone de palavras"
                  src="https://c.animaapp.com/r9jpr4Nx/img/group@2x.png"
                />
                <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-[#1e1e1e] text-sm tracking-[0] leading-[normal]">
                  Palavras Usadas: {conversationHistory.length * 100} {/* Exemplo simples de contagem */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

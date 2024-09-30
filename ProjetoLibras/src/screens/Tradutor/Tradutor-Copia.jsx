// Importando as bibliotecas necessárias
import React, { useState, useRef, useEffect } from 'react'; // React e seus hooks
import * as tf from "@tensorflow/tfjs"; // TensorFlow.js para machine learning
import * as handpose from "@tensorflow-models/handpose"; // Modelo de detecção de mãos
import Webcam from "react-webcam"; // Componente para acessar a webcam
import { drawHand, drawRect } from "./utilities"; // Funções auxiliares para desenho
import { Circle } from "../../components/Circle"; // Componente Circle (não mostrado aqui)

// Definindo o componente principal Tradutor
export function Tradutor() {
  // Estados (variáveis que podem mudar e causar re-renderização)
  const [translationResult, setTranslationResult] = useState(''); // Resultado da tradução
  const [textToSign, setTextToSign] = useState(''); // Texto para ser traduzido para Libras
  const [conversationHistory, setConversationHistory] = useState([]); // Histórico de conversas
  const [isCapturing, setIsCapturing] = useState(false); // Se está capturando vídeo
  const [model, setModel] = useState(null); // Modelo de detecção de mãos
  const [librasModel, setLibrasModel] = useState(null); // Modelo de reconhecimento de Libras
  const [error, setError] = useState(null); // Armazena erros
  const [isLoading, setIsLoading] = useState(true); // Indica se está carregando
  
  // Referências para elementos DOM
  const webcamRef = useRef(null); // Referência para o componente da webcam
  const canvasRef = useRef(null); // Referência para o canvas de desenho

  // Efeito que roda uma vez ao montar o componente
  useEffect(() => {
    // Carrega o histórico de conversas do armazenamento local
    const storedHistory = JSON.parse(localStorage.getItem('conversationHistory')) || [];
    setConversationHistory(storedHistory);
    // Carrega os modelos de IA
    loadModels();
  }, []);

  // Função para carregar os modelos de IA
  const loadModels = async () => {
    setIsLoading(true);
    try {
      // Carrega o modelo de detecção de mãos
      const loadedHandModel = await handpose.load();
      setModel(loadedHandModel);
      console.log("Modelo de detecção de mãos carregado.");

      // Simula o carregamento do modelo de Libras (substitua por seu modelo real)
      const loadedLibrasModel = await new Promise(resolve => setTimeout(() => resolve({}), 2000));
      setLibrasModel(loadedLibrasModel);
      console.log("Modelo de reconhecimento de Libras carregado.");
      
      setIsLoading(false);
    } catch (error) {
      console.error("Erro ao carregar os modelos:", error);
      setError("Falha ao carregar os modelos. Por favor, recarregue a página.");
      setIsLoading(false);
    }
  };

  // Função para executar a detecção de mãos
  const runHandpose = async () => {
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      // Configura as dimensões do vídeo e do canvas
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      // Estima as posições das mãos
      const hand = await model.estimateHands(video);

      // Desenha as mãos no canvas
      const ctx = canvasRef.current.getContext("2d");
      drawHand(hand, ctx);

      return hand;
    }
  };

  // Função para processar os dados da mão
  const processHandData = (hand) => {
    // Implementação simplificada: extrai as coordenadas dos pontos-chave da mão
    if (hand && hand.length > 0) {
      return hand[0].landmarks.flat();
    }
    return null;
  };

  // Função para interpretar o resultado do gesto
  const interpretGestureResult = (gesture) => {
    // Implementação simplificada: mapeia o índice do gesto para um sinal de Libras
    const gestures = ["A", "B", "C", "D", "E"]; // Expanda isso com mais gestos
    const maxIndex = gesture.argMax().dataSync()[0];
    return gestures[maxIndex] || "Desconhecido";
  };

  // Função para mapear gesto para texto
  const mapGestureToText = (gesture) => {
    // Implementação simplificada: usa o gesto diretamente como texto
    return gesture;
  };

  // Função para traduzir texto para Libras
  const translateTextToLibras = async (text) => {
    // Implementação simplificada: converte cada letra para um gesto de Libras
    const librasTranslation = text.toUpperCase().split('').map(letter => {
      return `[Gesto para "${letter}"]`;
    }).join(' ');
    return librasTranslation;
  };

  // Função para reconhecer gestos
  const recognizeGesture = (hand) => {
    const processedData = processHandData(hand);
    if (processedData) {
      // Simula a previsão do modelo (substitua pela lógica real do seu modelo)
      const gesture = tf.tensor(processedData);
      const prediction = tf.randomUniform([5]); // Simula 5 classes de gestos
      return interpretGestureResult(prediction);
    }
    return "Nenhum gesto detectado";
  };

  // Função para iniciar a captura de vídeo
  const handleCapture = async () => {
    setIsCapturing(true);
    if (webcamRef.current) {
      webcamRef.current.video.play();
    }
  };

  // Função para parar a captura de vídeo
  const stopCapture = () => {
    setIsCapturing(false);
    if (webcamRef.current) {
      webcamRef.current.video.pause();
    }
  };

  // Função para capturar e detectar gestos
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

  // Função principal de tradução
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

  // Função para adicionar uma tradução ao histórico
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
    setError(null);
  };

  // Função para deletar a última geração do histórico
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

  // Efeito para executar a detecção de mãos continuamente durante a captura
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

  // Renderização condicional para estados de carregamento e erro
  if (isLoading) {
    return <div>Carregando modelos...</div>;
  }

  if (error) {
    return <div>Erro: {error}</div>;
  }

  // Renderização principal do componente
  return (
    <div className="bg-[#f0f0f0] flex flex-row justify-center w-full">
      <div className="bg-[#f0f0f0] overflow-hidden w-[1440px] h-[1024px]">
        <div className="relative w-[1466px] h-[1024px] left-[-26px]">
          {/* Barra lateral esquerda */}
          <div className="absolute w-[344px] h-[1024px] top-0 left-[26px] bg-[#3c70e7] rounded-[0px_58px_0px_0px]">
            {/* Conteúdo da barra lateral */}
            {/* ... (código da barra lateral) ... */}
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
                aria-label={isCapturing ? "Parar Captura" : "Iniciar Captura"}
              >
                {isCapturing ? 'Parar Captura' : 'Iniciar Captura'}
              </button>
              {translationResult && (
                <p className="mt-4 text-white">Tradução: {translationResult}</p>
              )}
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
                  aria-label="Texto para traduzir"
                />
              </div>
              <button
                onClick={handleTranslate}
                className="absolute w-14 h-14 top-0 right-0 bg-[#11b063] rounded-[10px] flex items-center justify-center"
                aria-label="Traduzir"
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
              aria-label="Deletar última geração"
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
              aria-label="Regenerar geração"
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
                  Palavras Usadas: {conversationHistory.length * 100}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

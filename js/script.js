// Função para mostrar a seção selecionada e esconder as outras
function showSection(sectionId) {
  // Seleciona todas as seções de conteúdo
  const sections = document.querySelectorAll('.content-section');
  
  // Esconde todas as seções
  sections.forEach(section => {
      section.style.display = 'none';
  });
  
  // Mostra a seção correspondente ao ID fornecido
  document.getElementById(sectionId).style.display = 'block';
}

// Função para sair do sistema
function logout() {
  alert('Você saiu do sistema.');
}

// Tradução em Tempo Real
document.getElementById('startTranslation').addEventListener('click', async () => {
  const video = document.getElementById('translationVideo');

  // Inicializa o fluxo de vídeo da câmera
  navigator.mediaDevices.getUserMedia({ video: true })
      .then((stream) => {
          // Atribui o fluxo de vídeo ao elemento de vídeo
          video.srcObject = stream;

          // Quando o vídeo estiver carregado, começar a capturar frames
          video.addEventListener('loadeddata', () => {
              const captureFrames = () => {
                  // Cria um canvas para desenhar o vídeo
                  const canvas = document.createElement('canvas');
                  canvas.width = video.videoWidth;
                  canvas.height = video.videoHeight;
                  const ctx = canvas.getContext('2d');
                  // Desenha o vídeo no canvas
                  ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

                  // Obtém os dados da imagem do frame
                  const imageData = canvas.toDataURL('image/jpeg');

                  // Envia os frames para o backend Python para processamento
                  fetch('/recognize-gesture', {
                      method: 'POST',
                      headers: {
                          'Content-Type': 'application/json'
                      },
                      body: JSON.stringify({ image: imageData })
                  })
                  .then(response => response.json())
                  .then(data => {
                      // Atualiza o resultado da tradução na tela
                      document.getElementById('translationResult').innerText = `Gesto detectado: ${data.gesture}`;
                  })
                  .catch(error => console.error('Erro ao reconhecer gesto:', error));

                  // Continua capturando frames a cada 200ms
                  setTimeout(captureFrames, 200);
              };

              // Inicia a captura de frames
              captureFrames();
          });
      })
      .catch(err => console.error('Erro ao acessar webcam:', err));
});

// Entrada de Texto e Voz
document.getElementById('submitText').addEventListener('click', () => {
  const text = document.getElementById('textInput').value;
  // Processa a entrada de texto para tradução ou reconhecimento
});

// Início da Entrada de Voz
document.getElementById('startVoiceInput').addEventListener('click', () => {
  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
  recognition.lang = 'pt-BR'; // Define o idioma como português

  recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      document.getElementById('textInput').value = transcript; // Popula a textarea com o texto reconhecido
  };

  recognition.onerror = (event) => {
      console.error("Erro de reconhecimento de fala:", event.error);
  };

  recognition.start();
});

// Seleção de Idioma
document.getElementById('languageSelect').addEventListener('change', (event) => {
  const selectedLanguage = event.target.value;
});

// Configurações Personalizadas
document.getElementById('saveSettings').addEventListener('click', () => {
  const speed = document.getElementById('translationSpeed').value;
  const feedback = document.getElementById('feedbackType').value;

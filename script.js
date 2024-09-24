const express = require('express');
const app = express();
const port = 3000;

app.post('/recognize-gesture', (req, res) => {
  const gestureData = req.body;
  // Processar os dados de gestos de mão aqui
  const recognitionResult = recognizeGesture(gestureData);
  res.json(recognitionResult);
});

app.listen(port, () => {
  console.log(`API está rodando na porta ${port}`);
});
fetch('/recognize-gesture', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(gestureData)
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error(error));

function showSection(sectionId) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
}

function logout() {
    alert('Você saiu do sistema.');
    // More functionality like clearing session can be added here
}

// Real-Time Translation
document.getElementById('startTranslation').addEventListener('click', async () => {
    const video = document.getElementById('translationVideo');
    
    // Inicializar o fluxo de vídeo da câmera
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(async (stream) => {
            video.srcObject = stream;

            // Carregar o modelo de detecção de mão do TensorFlow.js
            const model = await handpose.load();
            console.log("Modelo de detecção de mãos carregado!");

            // Processar cada frame de vídeo
            video.addEventListener('loadeddata', async () => {
                const detectHands = async () => {
                    const predictions = await model.estimateHands(video);
                    if (predictions.length > 0) {
                        console.log(predictions);
                        // Aqui você pode processar as predições para reconhecer sinais
                        const hand = predictions[0];
                        // Exibir resultados ou passar para função de reconhecimento
                        processHandGesture(hand);
                    }
                    requestAnimationFrame(detectHands); // Continue processando os frames
                };

                detectHands();
            });
        })
        .catch(err => console.error('Error accessing webcam:', err));
});
function processHandGesture(hand) {
    // Aqui você pode processar as posições dos dedos para reconhecer o gesto.
    const landmarks = hand.landmarks;

    // Exemplo simples de processamento:
    // Verificar se o dedo indicador está levantado (posição y mais alta que a palma)
    if (landmarks[8][1] < landmarks[0][1]) {
        document.getElementById('translationResult').innerText = "Gesto detectado: Sinal de positivo";
    } else {
        document.getElementById('translationResult').innerText = "Nenhum gesto reconhecido";
    }
}


// Text and Voice Input
document.getElementById('submitText').addEventListener('click', () => {
    const text = document.getElementById('textInput').value;
    // Process text input for translation or recognition
});

document.getElementById('startVoiceInput').addEventListener('click', () => {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = 'pt-BR'; // Set language as Portuguese
    recognition.interimResults = false;

    recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        document.getElementById('textInput').value = transcript; // Populate textarea with recognized text
    };

    recognition.onerror = (event) => {
        console.error("Speech recognition error:", event.error);
    };

    recognition.start();
});

// Language Selection
document.getElementById('languageSelect').addEventListener('change', (event) => {
    const selectedLanguage = event.target.value;
    // Update application language settings based on selection
});

// Custom Settings
document.getElementById('saveSettings').addEventListener('click', () => {
    const speed = document.getElementById('translationSpeed').value;
    const feedback = document.getElementById('feedbackType').value;
    
    localStorage.setItem('translationSpeed', speed);
    localStorage.setItem('feedbackType', feedback);
    
    alert('Configurações salvas!');
});

// Conversation History
function loadConversationHistory() {
    const historyList = document.getElementById('historyList');
    const conversations = JSON.parse(localStorage.getItem('conversationHistory')) || [];
    
    conversations.forEach(conversation => {
        const listItem = document.createElement('li');
        listItem.textContent = conversation;
        historyList.appendChild(listItem);
    });
}
loadConversationHistory();

// Support and Help
document.getElementById('feedbackForm').addEventListener('submit', (event) => {
    event.preventDefault();
    
    const suggestion = event.target.querySelector('textarea').value;
    
    let suggestions = JSON.parse(localStorage.getItem('userSuggestions')) || [];
    suggestions.push(suggestion);
    
    localStorage.setItem('userSuggestions', JSON.stringify(suggestions));
    
    alert('Sugestão enviada com sucesso!');
    
    event.target.reset(); // Reset the form
});

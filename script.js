

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
        .then((stream) => {
            video.srcObject = stream;

            // Quando o vídeo estiver carregado, começar a capturar frames
            video.addEventListener('loadeddata', () => {
                const captureFrames = () => {
                    const canvas = document.createElement('canvas');
                    canvas.width = video.videoWidth;
                    canvas.height = video.videoHeight;
                    const ctx = canvas.getContext('2d');
                    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

                    // Obter os dados da imagem do frame
                    const imageData = canvas.toDataURL('image/jpeg');

                    // Enviar os frames para o backend Python para processamento
                    fetch('/recognize-gesture', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ image: imageData })
                    })
                    .then(response => response.json())
                    .then(data => {
                        document.getElementById('translationResult').innerText = `Gesto detectado: ${data.gesture}`;
                    })
                    .catch(error => console.error('Erro ao reconhecer gesto:', error));

                    // Continuar capturando frames a cada 200ms
                    setTimeout(captureFrames, 200);
                };

                // Iniciar captura de frames
                captureFrames();
            });
        })
        .catch(err => console.error('Erro ao acessar webcam:', err));
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

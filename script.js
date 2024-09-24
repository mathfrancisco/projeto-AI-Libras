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
document.getElementById('startTranslation').addEventListener('click', () => {
    const video = document.getElementById('translationVideo');
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
            video.srcObject = stream;
            // Call function to process video frames for translation
        })
        .catch(err => console.error('Error accessing webcam:', err));
});

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

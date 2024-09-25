// Função para exibir a seção correspondente ao menu clicado
function showSection(sectionId) {
    // Esconder todas as seções
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Exibir a seção selecionada
    const sectionToShow = document.getElementById(sectionId);
    if (sectionToShow) {
        sectionToShow.style.display = 'block';
    }
}

// Simulação de logout
function logout() {
    alert('Você saiu da conta.');
    // Aqui você pode adicionar a lógica de redirecionamento ou logout real
}


// Função de busca simulada
document.getElementById('searchButton').addEventListener('click', function() {
    const query = document.getElementById('searchInput').value;
    if (query) {
        alert(`Buscando por: ${query}`);
        // Aqui você pode adicionar a lógica de busca real
    }
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


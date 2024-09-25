// Variáveis para referência aos elementos
const chatInput = document.getElementById('chatInput');
const chatMessages = document.querySelector('.chat-messages');
const sendButton = document.querySelector('.send-button');
const deleteButton = document.querySelector('.delete-button');
const regenerateButton = document.querySelector('.regenerate-button');
const wordCountText = document.querySelector('.word-count-text');

// Contador de palavras usado
let wordCount = 12000;

// Função para adicionar uma nova mensagem no chat
function addMessage(content, isUser = true) {
  const messageDiv = document.createElement('div');
  const messageAvatar = document.createElement('img');
  const messageText = document.createElement('p');

  // Define o conteúdo da mensagem e estilo de acordo com quem enviou (usuário ou IA)
  if (isUser) {
    messageDiv.classList.add('user-message');
    messageAvatar.src = 'https://cdn.builder.io/api/v1/image/assets/TEMP/260219bebb84dcdfc113b41f48c13bfa324d445443f32c1d20adff46669bbb67?placeholderIfAbsent=true&apiKey=acd33750e364423796cf9d346ab258d6';
  } else {
    messageDiv.classList.add('ai-message');
    messageAvatar.src = 'https://cdn.builder.io/api/v1/image/assets/TEMP/7269f968874a71c825c2bb47a092aae1e829d18078be92f4b30e03c58757ed15?placeholderIfAbsent=true&apiKey=acd33750e364423796cf9d346ab258d6';
  }

  // Adiciona o texto e avatar à mensagem
  messageText.textContent = content;
  messageDiv.appendChild(messageAvatar);
  messageDiv.appendChild(messageText);

  // Adiciona a mensagem ao chat
  chatMessages.appendChild(messageDiv);

  // Atualiza o contador de palavras
  wordCount += content.split(' ').length;
  wordCountText.textContent = `Palavras Usadas: ${wordCount}`;

  // Limpa o campo de entrada
  chatInput.value = '';
}

// Função para lidar com o envio de mensagem
function handleSendMessage(event) {
  event.preventDefault();

  const userInput = chatInput.value.trim();
  if (userInput) {
    // Adiciona a mensagem do usuário ao chat
    addMessage(userInput);

    // Simula a resposta da IA (após 1 segundo, por exemplo)
    setTimeout(() => {
      addMessage('Resposta da IA para: ' + userInput, false);
    }, 1000);
  }
}

// Função para deletar a última mensagem do chat
function handleDeleteMessage() {
  const lastMessage = chatMessages.lastElementChild;
  if (lastMessage) {
    // Remove a última mensagem e subtrai do contador de palavras
    const lastMessageText = lastMessage.querySelector('p').textContent;
    wordCount -= lastMessageText.split(' ').length;
    wordCountText.textContent = `Palavras Usadas: ${wordCount}`;

    // Remove o elemento da DOM
    chatMessages.removeChild(lastMessage);
  }
}

// Função para regenerar a última geração (simula uma nova resposta da IA)
function handleRegenerateMessage() {
  const lastMessage = chatMessages.lastElementChild;
  if (lastMessage && lastMessage.classList.contains('ai-message')) {
    const aiMessageText = lastMessage.querySelector('p').textContent;

    // Simula uma nova geração com base na última resposta da IA
    const newMessage = 'Nova geração para: ' + aiMessageText;
    lastMessage.querySelector('p').textContent = newMessage;
  }
}

// Event listeners para os botões
sendButton.addEventListener('click', handleSendMessage);
deleteButton.addEventListener('click', handleDeleteMessage);
regenerateButton.addEventListener('click', handleRegenerateMessage);

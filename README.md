AI Sign
AI Sign é um sistema de reconhecimento de linguagem de sinais que utiliza captura de vídeo em tempo real, entrada de texto e voz, e oferece suporte a várias configurações de usuário. O sistema é projetado para auxiliar na comunicação entre diferentes usuários, utilizando tecnologias de aprendizado de máquina e reconhecimento de fala.

Funcionalidades
Tradução em Tempo Real: Captura de vídeo para reconhecimento de gestos em tempo real.
Entrada de Texto e Voz: Permite que os usuários insiram texto por meio de digitação ou voz.
Seleção de Idioma: Suporte para diferentes idiomas, incluindo Libras e ASL.
Configurações Personalizadas: Opções para ajustar a velocidade da tradução e tipos de feedback.
Histórico de Conversas: Armazenamento local das conversas anteriores para fácil acesso.
Suporte e Ajuda: Seção para perguntas frequentes e envio de sugestões.
Tecnologias Utilizadas
Frontend: HTML, CSS, JavaScript
Backend: Python (Flask), OpenCV, TensorFlow
Modelos de IA: TensorFlow.js, Handpose para reconhecimento de gestos
Requisitos
Python 3.x
Flask
OpenCV
TensorFlow
Instalação
Clone este repositório: 
git clone https://github.com/seuusuario/ai-sign.git
cd ai-sign
Crie um ambiente virtual e ative-o:
python -m venv venv
source venv/bin/activate  # Para Windows use: venv\Scripts\activate
Instale as dependências:
pip install -r requirements.txt
Baixe o modelo de aprendizado de máquina e coloque no diretório apropriado (ajuste o caminho no código conforme necessário). :https://drive.google.com/file/d/165fKeQY1AhbMUVnV8MyQrMnNWbO7d3fg/view
Uso
Inicie o servidor Flask: python app.py
Abra seu navegador e acesse http://localhost:3000 para usar o aplicativo
Contribuição
Contribuições são bem-vindas! Se você quiser contribuir, por favor, siga estas etapas:

Fork este repositório.
Crie uma nova branch (git checkout -b feature/nome-da-feature).
Faça suas alterações e commit (git commit -m 'Adicionando nova funcionalidade').
Envie para a branch (git push origin feature/nome-da-feature).
Abra um Pull Request.

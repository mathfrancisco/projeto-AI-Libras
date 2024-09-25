<script>
  document.addEventListener("DOMContentLoaded", function () {
    // Referência aos campos do formulário
    const emailInput = document.getElementById("email-input");
    const passwordInput = document.getElementById("password-input");
    const confirmPasswordInput = document.getElementById("confirm-password-input");
    const phoneInput = document.getElementById("phone-input");
    const nameInput = document.getElementById("name-input");

    // Manipulador do evento de submissão do formulário
    document.querySelector("form").addEventListener("submit", function (event) {
      event.preventDefault(); // Previne o envio do formulário para poder fazer a validação
      const email = emailInput.value.trim();
      const password = passwordInput.value.trim();
      const confirmPassword = confirmPasswordInput.value.trim();
      const phone = phoneInput.value.trim();
      const name = nameInput.value.trim();

      // Limpeza de mensagens de erro anteriores
      clearErrors();

      let isValid = true;

      // Valida se os campos estão preenchidos
      if (!email || !password || !confirmPassword || !phone || !name) {
        showError("Todos os campos são obrigatórios.");
        isValid = false;
      }

      // Valida se as senhas coincidem
      if (password !== confirmPassword) {
        showError("As senhas não coincidem.");
        isValid = false;
      }

      // Se tudo estiver correto, faça o processamento (ex: envio ao backend)
      if (isValid) {
        alert("Cadastro realizado com sucesso!");
        // Aqui você pode enviar o formulário para o servidor usando uma requisição AJAX ou similar
      }
    });

    // Função para mostrar uma mensagem de erro
    function showError(message) {
      const errorElement = document.createElement("p");
      errorElement.textContent = message;
      errorElement.classList.add("error-message");
      document.querySelector(".registration-content").appendChild(errorElement);
    }

    // Função para limpar as mensagens de erro anteriores
    function clearErrors() {
      const errorMessages = document.querySelectorAll(".error-message");
      errorMessages.forEach(function (message) {
        message.remove();
      });
    }
  });
</script>

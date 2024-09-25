<script>
  document.addEventListener("DOMContentLoaded", function () {
    // Referência aos links de navegação
    const loginLink = document.querySelector(".login-link");
    const signupLink = document.querySelector(".signup-link");
    const ctaButton = document.querySelector(".cta-button");

    // Exibe um alerta ao clicar no link "Entrar"
    loginLink.addEventListener("click", function (event) {
      event.preventDefault();
      alert("Página de login em construção.");
    });

    // Exibe um alerta ao clicar no link "Cadastrar"
    signupLink.addEventListener("click", function (event) {
      event.preventDefault();
      alert("Página de cadastro em construção.");
    });

    // Exibe uma mensagem ao clicar no botão "Comece Gratuitamente"
    ctaButton.addEventListener("click", function (event) {
      event.preventDefault();
      alert("Redirecionando para a página de cadastro...");
      // Aqui você pode redirecionar para a página de cadastro, por exemplo:
      // window.location.href = "/cadastro.html";
    });

    // Função para futuras interações com Luzia, o avatar 3D
    const avatarImage = document.querySelector(".avatar-image");
    avatarImage.addEventListener("click", function () {
      alert("Luzia está aqui para ajudar você! Em breve, ela estará interagindo em tempo real.");
    });

    // Expansão futura: animações ou eventos adicionais
    // Exemplo: Pode ser adicionado um hover que muda a cor dos botões ou elementos
  });
</script>

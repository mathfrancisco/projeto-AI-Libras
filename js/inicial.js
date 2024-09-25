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

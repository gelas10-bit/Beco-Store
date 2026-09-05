// Teste para verificar se o js esta funcionando
console.log("O JavaScript está funcionando corretamente!");


// Seleciona todos os botoes do cabeçalho
const headerButtons = document.querySelectorAll(".header-button");

// Adiciona uma ação de clique a cada botão
headerButtons.forEach(function(button) {
    button.addEventListener("click", function() {

        // Mostra no console qual botão foi clicado
        console.log("Botão clicado:", button.textContent);
    })
})
// Seleciona o botão Buscar
const searchButton = document.querySelector("#search-button");

// Seleciona a área de busca
const searchBox = document.querySelector("#search-box");

// Seleciona o campo de pesquisa
const searchInput = document.querySelector("#search-input");

// Seleciona o botão Fechar
const closeSearch = document.querySelector("#close-search");

// Seleciona todos os cards de produtos
const productCards = document.querySelectorAll(".product-card");

// Seleciona a mensagem de "Nenhum produto encontrado"
const noResultsMessage = document.querySelector("#no-results");


// Quando o usuário clicar em "Buscar"
searchButton.addEventListener("click", function() {

    // Mostra a área de busca
    searchBox.style.display = "block";

    // Coloca o foco no campo de busca
    searchInput.focus();

});


// Quando o usuário clicar em "Fechar"
closeSearch.addEventListener("click", function() {

    // Esconde a área de busca
    searchBox.style.display = "none";

});


// Detecta quando o usuário digita no campo de busca
searchInput.addEventListener("input", function() {

    // Pega o texto digitado e converte para letras minúsculas
    const searchText = searchInput.value.toLowerCase();

    // Conta quantos prdutos foram encontrados
    let foundProducts = 0;   

    // Percorre todos os cards de produtos
    productCards.forEach(function(product) {

        // Pega o nome do produto
        const productName = product.querySelector("h3").textContent.toLowerCase();

        // Verifica se o nome do produto corresponde à pesquisa
        if (productName.includes(searchText)) {

            // Mostra o produto
            product.style.display = "block";
            
            // Adiciona 1 produto á contagem
            foundProducts++;
        } else {

            // Esconde o produto
            product.style.display = "none";

        }
    });

    // Se nenhum produto foi encontrado, mostra a mensagem
    if (foundProducts === 0) {
        noResultsMessage.style.display = "block";
        
    } else {
        // Esconde a mensagem
        noResultsMessage.style.display = "none";
    }       

});
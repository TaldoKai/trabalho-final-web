// Lista de produtos
const products = [
    {
        nome: 'Modelo de imagem pra trabalho de faculdade de final de semestre',
        preco: 9.99,
        descricao: 'Sim, a gente vende isso também, dá pra vender tudo, que a galera vai comprar',
        imagem: 'https://via.placeholder.com/150',
        quantidadeEstoque: '3'
    },
    {
        nome: 'Iphonão',
        preco: 9999.99,
        descricao: 'Adão pagou caro por uma maçã, você também',
        imagem: 'https://m.media-amazon.com/images/I/41kBmL3zaZL._AC_SL1000_.jpg',
        quantidadeEstoque: '66'
    },
    {
        nome: 'Fonezão top',
        preco: 499.99,
        descricao: 'Pro seu amigo te ouvir melhor chorando depois de perder a rankeada',
        imagem: 'https://m.media-amazon.com/images/I/71sV-QnV8TL._AC_SL1500_.jpg',
        quantidadeEstoque: '3'
    },
    {
        nome: 'Apple Whash, uach, whatch (sla como escreve)',
        preco: 3999.99,
        descricao: 'Pelo menos o adão pagou caro só uma vez... kk',
        imagem: 'https://m.media-amazon.com/images/I/71UWyLPfGJL._AC_SL1500_.jpg',
        quantidadeEstoque: '55'
    },
    {
        nome: 'Você tá me lendo ou é impressão minha?...',
        preco: 2990.90,
        descricao: 'Sim, todos leram "Édson" na primeira vez',
        imagem: 'https://m.media-amazon.com/images/I/71G4ZnrAsDL._AC_SL1500_.jpg',
        quantidadeEstoque: '5'
    },
    {
        nome: 'Teclado branco',
        preco: 299.99,
        descricao: 'Pra você manchar mais rápido já que joga enquanto come salgadinho',
        imagem: 'https://m.media-amazon.com/images/I/51NDKP5J4yL._AC_SL1000_.jpg',
        quantidadeEstoque: '4'
    },
    {
        nome: 'Alex',
        preco: 289.99,
        descricao: 'Sim, Alex',
        imagem: 'https://m.media-amazon.com/images/I/71JB6hM6Z6L._AC_SL1000_.jpg',
        quantidadeEstoque: '9'
    },
    {
        nome: 'PlayStation! PlayStation! PlayStation!',
        preco: 4990.00,
        descricao: 'Com embalagem colorida pra você pagar mais caro ;)',
        imagem: 'https://m.media-amazon.com/images/I/61qJexSEQjL._AC_SL1500_.jpg',
        quantidadeEstoque: '12'
    },
    {
        nome: 'Eques Boques',
        preco: 1990.99,
        descricao: 'Ih ala, já perdeu metade do valor de mercado kkkkk',
        imagem: 'https://m.media-amazon.com/images/I/516pVDAQMnL._AC_SL1000_.jpg',
        quantidadeEstoque: '17'
    },
    {
        nome: 'Nintendão Switch',
        preco: 2190.99,
        descricao: 'Vale mais que o Xbox kkkkkkkkkkkkkkk',
        imagem: 'https://m.media-amazon.com/images/I/41Nma-7GMfL._AC_SL1240_.jpg',
        quantidadeEstoque: '88'
    },
];

// Função para exibir os produtos na página inicial
function displayProducts() {
    const productsContainer = document.getElementById('products-container');

    products.forEach((product, index) => {
        // Criando a estrutura do card de produto
        const card = document.createElement('div');
        card.classList.add('bg-white', 'p-4', 'rounded', 'shadow-md');

        // Conteúdo do card
        card.innerHTML = `
            <img src="${product.imagem}" alt="${product.nome}" class="mx-auto">
            <h2 class="text-xl font-bold mt-2">${product.nome}</h2>
            <p class="text-gray-700">${product.descricao}</p>
            <p class="text-gray-900 font-bold mt-2">R$ ${product.preco.toFixed(2)}</p>
            <button class="bg-blue-500 text-white px-4 py-2 mt-4 rounded hover:bg-blue-600" onclick="addToCart(${index})">Adicionar ao carrinho</button>
        `;

        // Adicionando o card ao contêiner de produtos
        productsContainer.appendChild(card);
    });
}

// Função para adicionar um produto ao carrinho
function addToCart(index) {
    const selectedProduct = products[index];

    addToCartPopup(selectedProduct);
}

// Função para exibir um popup com as informações do produto adicionado ao carrinho
function addToCartPopup(product) {
    alert(`
        Produto adicionado ao carrinho:
        Nome: ${product.nome}
        Descrição: ${product.descricao}
        Preço: R$ ${product.preco.toFixed(2)}
        Quantidade em estoque: ${product.quantidadeEstoque}
    `);
}

// Chamando a função para exibir os produtos ao carregar a página
window.onload = function () {
    displayProducts();
};
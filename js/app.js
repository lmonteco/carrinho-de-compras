let listaProdutos = document.getElementById('lista-produtos');
let quantidade = document.getElementById('quantidade');
let valorTotal = document.getElementById('valor-total');
let valorInicial = 0;
let carrinho = [];

function adicionar() {
    [nomeProduto, valorProduto] = document.getElementById('produto').value.split(' - R$');
    let valorQuantidade = parseInt(quantidade.value);
    let totalProduto = valorQuantidade * parseInt(valorProduto);
    
    if (isNaN(valorQuantidade) || valorQuantidade <= 0) {
        alert(`Você precisa informar uma quantidade válida. Tente novamente.`);
        return;
    }
    
    carrinho.push(`${valorQuantidade}x ${nomeProduto} R$ ${totalProduto}`);
    
    adicionarProdutoCarrinho(valorQuantidade, nomeProduto, totalProduto);    
    totalizar(totalProduto);
    quantidade.value = '';
}

function adicionarProdutoCarrinho(quantidade, descricao, valor) {    
    let novoProduto = document.createElement('section');
    
    novoProduto.classList.add('carrinho__produtos__produto');
    novoProduto.innerHTML = `<span class="texto-azul">${quantidade} x</span> ${descricao} <span class="texto-azul"> R$${valor}</span>`;
    listaProdutos.appendChild(novoProduto);
}

function totalizar(valorAdicionado) {
    let somaTotal = valorInicial + valorAdicionado;

    valorInicial = somaTotal;
    valorTotal.innerHTML = `R$ ${somaTotal}`;
}

function limpar() {
    valorInicial = 0;
    valorTotal.innerHTML = `R$ ${valorInicial}`;
    carrinho = [];
    quantidade.value = '';
    listaProdutos.innerHTML = '';
}
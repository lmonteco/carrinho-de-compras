carrinho = [];
let valorInicial = 0;

//pegar a informação do combobox de produtos;**
//pegar a quantidade de itens definida no input;**
//validar preenchimento dos inputs obrigatórios;**
//multiplicar quantidade pelo valor do produto;**
//armazenar no array de carrinho a descrição, o valor e a quantidade do produto agrupadamente;**
//atualizar a lista de carrinho;*
//totalizar o valor dos produtos no carrinho;

function adicionar() {
    [nomeProduto, valorProduto] = document.getElementById('produto').value.split(' - R$');
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let totalProduto = quantidade * parseInt(valorProduto);
    
    if (isNaN(quantidade) || quantidade <= 0) {
        alert(`Você precisa informar uma quantidade válida. Tente novamente.`);
        return;
    }
    
    carrinho.push(`${quantidade}x ${nomeProduto} R$ ${totalProduto}`);

    atualizarCarrinho(quantidade, nomeProduto, totalProduto);    
    totalizar(totalProduto);
}

function atualizarCarrinho(quantidade, descricao, valor) {    
    let listaProdutos = document.getElementById('lista-produtos');
    let novoProduto = document.createElement('section');

    novoProduto.classList.add('carrinho__produtos__produto');
    novoProduto.innerHTML = `<span class="texto-azul">${quantidade} x</span> ${descricao} <span class="texto-azul"> R$${valor}</span>`;
    listaProdutos.appendChild(novoProduto);
}

function totalizar(valorAdicionado) {
    let valorTotal = document.getElementById('valor-total');
    let somaTotal = valorInicial + valorAdicionado;
    valorInicial = somaTotal

    valorTotal.innerHTML = `R$ ${somaTotal}`;
}

function limpar() {

}
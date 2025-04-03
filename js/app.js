carrinho = [];

//pegar a informação do combobox de produtos;**
//pegar a quantidade de itens definida no input;**
//validar preenchimento dos inputs obrigatórios;**
//multiplicar quantidade pelo valor do produto;**
//armazenar no array de carrinho a descrição, o valor e a quantidade do produto agrupadamente;**
//atualizar a lista de carrinho;
//totalizar o valor dos produtos no carrinho;

function adicionar() {
    [nomeProduto, valorProduto] = document.getElementById('produto').value.split(' - R$');
    quantidade = parseInt(document.getElementById('quantidade').value);
    if (isNaN(quantidade) || quantidade <= 0) {
        alert(`Você precisa informar uma quantidade válida. Tente novamente.`);
        return;
    }
    totalProduto = quantidade * parseInt(valorProduto);
    carrinho.push(`${quantidade}x ${nomeProduto} R$ ${totalProduto}`)
    console.log(carrinho);
}

function limpar() {
    
}

function totalizar() {

}
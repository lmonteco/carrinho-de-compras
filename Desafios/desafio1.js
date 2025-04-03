let titulo = document.getElementById('titulo');
let tempoTotal = 0;

function recuperarValores(event) {
    event.preventDefault();
    let mensagem = document.getElementById('mensagem').value;
    let idade = parseInt(document.getElementById('idade').value);
    let tempo = parseInt(document.getElementById('tempo').value);
    
    console.log(idade);
    console.log(tempo);
    console.log(mensagem);

    tempoTotal = idade + tempo;
    mudarTexto();
}

function mudarTexto() {
    titulo.textContent = `Obrigado por entrar em contato`;
    console.log(`Você terá ${tempoTotal} anos quando for pegar sua carteira`);    
}

let frase = 'Eu sempre soube dessa informação; Além disso, eu posso ler sua mente'
let fraseDividida1 = frase.split('; ')[0];
let fraseDividida2 = frase.split('; ')[1];
console.log(frase);
console.log(fraseDividida1);
console.log(fraseDividida2);

let numeros = '1,2,3,4,5,6,7,8,9,10';
console.log(numeros.split(','));




// //let titulo = document.querySelector('h1');
// //titulo.innerHTML = 'Jogo do numero Secreto';

// //let paragrafo = document.querySelector('p');
// //paragrafo.innerHTML = 'Escolha um numero entre 1 a 10';
let listaDeNumerosSorteados = [];
let numeroLimite = 50;
let numeroSecreto = geradorDeNumero();
let tentativas = 1;
function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;

}

function exibirMensagemInicial() { 
    exibirTextoNaTela('h1', 'Jogo do número secreto'); 
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 50'); I

}
exibirMensagemInicial();

function verificarChute(){
    let chute = document.querySelector('input').value;
    //console.log(`seu nome e ${chute}`);
    if(chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Voce acetou!!!');
        let palavraTentativa = tentativas > 1 ? 'tentativas': 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p',mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(chute > numeroSecreto){
            exibirTextoNaTela('p', 'o numero e menor');
        }else{
            exibirTextoNaTela('p', 'O numero e maior');
        }
    } tentativas++;
    limparCampo();
}

function geradorDeNumero() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
        let quantidadeDeElementosNalista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
        }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    
}else{
    listaDeNumerosSorteados.push(numeroEscolhido);
    return numeroEscolhido;
}
}
function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';

}
function reiniciarJogo() {
    numeroSecreto = geradorDeNumero();
    limparCampo();
    tentativas =1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true)
}

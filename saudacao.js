//Declaração da função com parâmetro 

function saudacao(nomeJogador){
    console.log("Bem-vindo ao jogo " + nomeJogador +"!") 
}; 

saudacao("Alex");

//Função recebe um valor, soma um número e retorna 
function subirDeNivel (nivelAtual){
    return nivelAtual + 1 
};
let meuNivel = 10;

let nivelAtualizado = subirDeNivel(meuNivel);
console.log("Seu nível atual é " + nivelAtualizado);

//Função que soma dois números
function soma(numero1, numero2){
    return numero1 + numero2 
};
console.log(soma(5,3));

function verificarPar(numero){
    if (numero % 2 == 0) {
        return "O número é par"
    } {
        return "O número é ímpar"
    }
};

console.log(verificarPar(3));
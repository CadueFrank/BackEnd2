//Calculadora de IMC

let nome = "Ana";
let peso = 25;
let altura = 2.80;

//Função que calcula e retorna o IMC
calcularIMC(peso, altura);{
    let imc = peso / (altura * altura)
};

let resultado = calcularIMC(peso, altura);
console.log(`IMG de ${nome}: ${resultado}`);

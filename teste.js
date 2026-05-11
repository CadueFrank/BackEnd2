//1.Declare 5 variaveis para representaruma viagem (destino, nome do viajante, cidade de origem, duracao em dias e meio dde transporte)
//2.Organizar uma forma de imprimir esses valores com interpolacao oun saida individual.

const destino = "Ipanema";
const nomeDoViajante = "Alicia";
const cidadeDeOrigem = "São Paulo";
let duracao = 4;
let transporte = "Carro";

console.log(`O viajante ${nomeDoViajante} deseja fazer uma viagem com saida de ${cidadeDeOrigem} até ${destino}, de ${transporte} em um percurso de ${duracao} horas`);

let valorDaPassagem = 25;
const valorDaHospedagem = 200;
let valorTotal = valorDaPassagem + valorDaHospedagem;

console.log(`Ele vai ter um gasto de ${valorTotal}, incluido o valor da passagem e da hospedagem.`);
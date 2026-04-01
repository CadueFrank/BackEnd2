const idade = 28;
const maiorDeIdade = idade >= 18;
const possuiCNH = false;

const podeDirigir = maiorDeIdade && possuiCNH;
console.log("pode dirigir? " + podeDirigir);

const podeViajarSozinho = maiorDeIdade || possuiCNH;
console.log("Pode viajar sozinho? " + podeViajarSozinho);

//operador NOT
const precisaDeAcompanhante = !maiorDeIdade;
console.log("Precisa de acompanhante? " + precisaDeAcompanhante);
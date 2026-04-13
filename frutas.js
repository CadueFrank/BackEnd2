
//lista ordenada de valores
const frutas = ["Abacaxi", "Banana", "pêssego", "Maracujá"];
//indice = 0        1          2          3         4

console.log(frutas[0]);
console.log(frutas[3]);
console.log(frutas.length); //Fas contagem dos elementos de dentro do array

frutas[1] = "Abacaxi";
console.log(frutas);

frutas.push("Manga");
frutas.unshift("Amora");
console.log(frutas);
console.log(frutas.length);

//NÃO COPIAR - 1) ALTERAR FRUTA MANGA POR LARANJA - 2) ADICIONAR ABACAXI ANTES DE ABACATE

frutas
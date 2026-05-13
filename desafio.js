//declarar 5 variaveis para representar o cadastro de um aluno
//fazer uma saida de forma interpolada (`${}`)

const nomeDoAluno = "Eduardo";
let idadeDoAluno = 16;
const gmailDoAluno = "eduardo1463@gmail.com.";
const cursoDoAluno = "Educação Financeira";
const desenpenhoDoAluno = "Ensino médio incompleto";
let notasInicioDoAno = 7.5;

console.log(`O aluno ${nomeDoAluno}, tem ${idadeDoAluno} anos e está no ${desenpenhoDoAluno}. esta cursando ${cursoDoAluno} e suas notas tem uma média de: ${notasInicioDoAno} no incio do ano.`);

let notasMeioDoAno = 6.7;
let notasFinalDoAno = 8.8;

let notasTotal = (notasMeioDoAno + notasFinalDoAno + notasInicioDoAno);

console.log(`No final do ano, ${nomeDoAluno} ficou com uma média de ${notasTotal} no seu boletim.`);
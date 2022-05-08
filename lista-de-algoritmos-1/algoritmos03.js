const prompt = require ('prompt-sync')();
var nome = prompt ('Qual o seu nome?');
var nota1 = parseInt(prompt ('Qual a sua nota 1?'));
var nota2 = parseInt(prompt ('Qual a sua nota 2?'));
var nota3 = parseInt(prompt ('Qual a sua nota 3?'));
var media = (nota1 + nota2 + nota3)/3


console.log ('Seu nome é ' + nome);
console.log ('Sua média é ' + media);

if (media >=8)
{

    console.log('Você foi aprovado')

}
else
{

    console.log('Você foi reprovado')
}
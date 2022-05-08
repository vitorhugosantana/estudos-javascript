const prompt = require('prompt-sync')();
var nome = prompt('Qual o seu nome?');
var idade = prompt ('Qual a sua idade?');
console.log('Seu nome é ' + nome);
console.log('Sua idade é ' + idade);

if (idade >=18) 
{
    console.log('Você é maior de idade')
}
else
{
    console.log('Você é menor de idade')
}

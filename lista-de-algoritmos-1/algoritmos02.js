const prompt = require('prompt-sync')();
var nome = prompt ('Qual o seu nome?');
var salario = prompt ('Qual o seu salário?');
var novo_salario = salario *1.18

console.log ('Seu nome é ' + nome);
console.log ('Seu novo salário é ' + novo_salario);

if (novo_salario >= 3000)
{

    console.log ('Você precisa pagar imposto')
}
else{

    console.log ('Você não precisa pagar imposto')

}
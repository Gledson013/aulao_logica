/*
exemplo 01
[X] Entrada de dados
[ ] Declaração de vetor
[ ] Declaração de função
[ ] Declaração de `Function Expression`
[ ] Declaração de `Arrow Function`
[X] Saída de dados
[ ] Generator Functions
*/

const prompt = require('prompt-sync')();

// let nome = prompt('Digite o seu nome: ');  // entrada de dados
// console.log("Voce inseriu " + nome);       // saída de dados

const numeros = [];

for(i = 0; i < 10; i++){          // Essa estrutura de repetição está coletando 10 números do usuário e armazenando-os em um vetor.
    const numero = prompt("Digite um número: ");
    numeros[i] = numero;
}

console.log(numeros.length);

for(j = 0; j < numeros.length; j++){    // Essa estrutura de repetição está imprimindo os números inseridos pelo usuário.
    console.log(numeros[j]);
}                                    // O script está coletando 10 números do usuário e imprimindo-os na tela, junto com o total de números inseridos.
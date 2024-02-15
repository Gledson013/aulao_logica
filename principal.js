/*
exemplo 01
[X] Entrada de dados
[ ] Declaração de vetor
[ ] Declaração de função
[X] Declaração de `Function Expression`
[X] Declaração de `Arrow Function`
[X] Saída de dados
[ ] Generator Functions
*/

const prompt = require('prompt-sync')();

//function lerNumeros(itens) {           // Declaração de `Function Declaration`
//const lerNumeros = function(itens) {   // Declaração de `Function Expression`
const lerNumeros = (itens) => {          // Declaração de `Arrow Function`
    const numeros = [];
    for(i = 0; i < itens; i++){
        const numero = prompt("Digite um número: ");
        numeros[i] = numero;
    }
    return numeros;
}

const numeros = lerNumeros(11);

for(j = 0; j < numeros.length; j++){    // Essa estrutura de repetição está imprimindo os números inseridos pelo usuário.
    console.log(numeros[j]);
}                                    // O script está coletando 10 números do usuário e imprimindo-os na tela, junto com o total de números inseridos.
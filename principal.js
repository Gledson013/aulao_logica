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

const escreverNumeros = function(numeros) {
    for(j = 0; j < numeros.length; j++){
        console.log(numeros[j]);
    };
};

ordenarDecrescente = (numeros) => {
    for(i = 0; i < numeros.length; i++){
        for(j = 0; j < numeros.length; j++){
            if(numeros[i] > numeros[j]){
                const temp = numeros[i]
                numeros[i] = numeros[j]
                numeros[j] = temp
            }
        }
    }
    return numeros;
};    

const numeros = lerNumeros(3);
const numerosOrdenados = ordenarDecrescente(numeros);
escreverNumeros(numeros);

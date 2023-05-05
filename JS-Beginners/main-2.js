
const {gets, print} = require('./funcao-aux.js');

const numeroSorteados = [];

for (let i = 0; i < 5; i++){
    const numeroSorteado = gets();
    numeroSorteados.push(numeroSorteado);
    
}

let maiorValor = 0;

for (let i = 0; i < numeroSorteados.length; i++){
    const numeroSorteado = numeroSorteados[i];
    if (numeroSorteado > maiorValor) {
        maiorValor = numeroSorteado;
    }
}

print(maiorValor);
/* 
 Uma sala conte, 5 alunos e para cada aluno foi sorteado um numero de 1 - 100.
 Faca um programa que recebe 5 numeros sorteados para os alunos e mostre o maior numero sorteado.

 Dados de entrada;
 5
 50
 10
 98
 23

 saida: 98
 */
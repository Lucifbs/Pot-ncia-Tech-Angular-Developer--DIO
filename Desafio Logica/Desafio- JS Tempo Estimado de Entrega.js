

//Desafios JavaScript na DIO t�m fun��es "gets" e "print" acess�veis globalmente:
//- "gets" : l� UMA linha com dado(s) de entrada (inputs) do usu�rio;
//- "print": imprime um texto de sa�da (output), pulando linha.

const nomeRestaurante = gets();
const tempoEstimadoEntrega = parseInt(gets());

function informarTempoDeEntraga(nomeRestaurante,tempoEstimadoEntrega){  
return `O restaurante ${nomeRestaurante} entrega em ${tempoEstimadoEntrega} minutos.`;
}

//TODO: Imprimir a sa�da no padr�o definido no enunciado deste desafio.
//Dica: Para simplificar a formata��o, utilize o conceito de interpola��o de strings.

let mensagemSaida = informarTempoDeEntraga(nomeRestaurante,tempoEstimadoEntrega);
console.log(mensagemSaida); 

//Primeiro, utilizamos a função gets() para ler duas entradas do usuário: o nome do restaurante e o tempo estimado de entrega em minutos.
//Em seguida, utilizamos a sintaxe de interpolação de strings com o símbolo de crase () para criar uma mensagem que contém o nome do restaurante e o tempo estimado de entrega. Note que, dentro da string, podemos utilizar a sintaxe ${variavel}para incluir o valor da variávelnomeRestauranteetempoEstimadoEntrega` na mensagem.
//Por fim, utilizamos a função print() para imprimir a mensagem na saída padrão
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
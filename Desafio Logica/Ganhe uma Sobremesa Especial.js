//Desafios JavaScript na DIO com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

const valorPedido = parseInt(gets())têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha ;


if (valorPedido >= 50) {
  print(`Parabens, você ganhou uma sobremesa gratis!`);
} else {
  print(`Que pena, você nao ganhou nenhum brinde especial.`);
}

//Vamos verificar se o valorPedido é maior ou igual a 50. Se for, vamos imprimir a mensagem
//"Parabéns, você ganhou uma sobremesa grátis!" utilizando a interpolação de strings. Caso contrário, vamos imprimir a mensagem 
//"Que pena, você não ganhou nenhum brinde especial."
//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

const valorHamburguer = parseFloat(gets());
const quantidadeHamburguer = parseInt(gets());
const valorBebida = parseFloat(gets());
const quantidadeBebida = parseInt(gets());
const valorPago = parseFloat(gets());

const valorTotalHamburguer = valorHamburguer * quantidadeHamburguer;

const valorTotalBebida = valorBebida * quantidadeBebida;

const precoTotalPedido = valorTotalHamburguer + valorTotalBebida;

const troco = valorPago - precoTotalPedido;

const mensagem = `O preço final do pedido é R$ ${precoTotalPedido.toFixed(2)}. Seu troco é R$ ${troco.toFixed(2)}.`;

print(mensagem);


//Utilizamos a função gets() para ler cinco valores de entrada do usuário: o valor unitário do hambúrguer, a quantidade de hambúrgueres desejada, o valor unitário da bebida, a quantidade de bebidas desejada e o valor pago pelo usuário.
//Em seguida, calculamos o valor total dos hambúrgueres e o valor total das bebidas multiplicando o valor unitário pelo quantidade escolhida pelo usuário.
//Depois, somamos o valor total dos hambúrgueres com o valor total das bebidas para obter o preço total do pedido.
//Por fim, subtraímos o preço total do pedido do valor pago pelo usuário para obter o troco necessário.
//Com todos os valores calculados, utilizamos a função toFixed() para formatar os valores numéricos com duas casas decimais e, por fim, criamos a mensagem de saída utilizando a sintaxe de interpolação de strings com o símbolo de crase (`).
//Por fim, utilizamos a função print() para imprimir a mensagem na saída padrão.
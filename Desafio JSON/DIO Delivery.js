
const quantidadeItens = parseInt(gets());
while (pedido.itens.length < quantidadeItens) {
  const nomeItem = gets();
  const precoItem = parseFloat(gets());
  pedido.itens.push({ nome: nomeItem, preco: precoItem });
}

let totalPrecoItem = pedido.itens.reduce((prev,curr) => prev + curr.preco, 0)
let valorTotal = pedido.taxaEntrega + totalPrecoItem;
console.log('Pedido: '+pedido.cliente+'\nEndereco de entrega: '+pedido.endereco+'\nTotal: R$ '+valorTotal.toFixed(2));
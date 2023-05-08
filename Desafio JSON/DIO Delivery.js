const pedido = {

  cliente: gets(),
 
  endereco: gets(),
 
  itens: [],
 
  taxaEntrega: 5.0
 
 };
  
 const quantidadeItens = parseInt(gets());
 
 while (pedido.itens.length < quantidadeItens) {
 
  const nomeItem = gets();
 
  const precoItem = parseFloat(gets());
 
  pedido.itens.push({ nome: nomeItem, preco: precoItem });
 
 } 
  
 let total = 0;
 
 for (let i = 0; i < pedido.itens.length; i++) {
 
  var totalPedido = pedido.itens[i].preco;
 
  total += totalPedido;
 
  }
 
  total += pedido.taxaEntrega;
  
 console.log("Pedido: " + pedido.cliente);
 
 console.log("Endereco de entrega: "+ pedido.endereco);
 
 console.log("Total: R$ "+total.toFixed(2));
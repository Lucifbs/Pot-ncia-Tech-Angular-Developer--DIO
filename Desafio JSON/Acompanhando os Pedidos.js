const pedido = {

  cliente: {
 
   nome: gets(),  
 
   endereco: gets(),
 
  },
 
  id: parseInt(gets()),
 
 };
  
 // Fora do objeto, crie o campo telefone adicionando ao objeto ja declarado acima
 
 
 
 pedido.cliente.telefone = gets();
 
 
//Obs. Para imprimi na tela pode usar o print ou console.log
 
 print(`Cliente: ${pedido.cliente.nome}, ${pedido.cliente.endereco}`);
 
 print(`ID: ${pedido.id}`);
 
 print(`Tel: ${pedido.cliente.telefone}`);
const pedidos = [

    { 
   
     nome: gets(), 
     tipo: gets(), 
     distancia: parseFloat(gets())
   
    },
   
    { 
   
     nome: gets(), 
     tipo: gets(), 
     distancia: parseFloat(gets())
   
    },
   
    { 
   
     nome: gets(), 
     tipo: gets(), 
     distancia: parseFloat(gets())
   
    }
   
   ];
         
   const pedido = pedidos.reduce((pedidoMaisProximo, pedidoAtual) => {
   
    if (pedidoMaisProximo.distancia < pedidoAtual.distancia) {
     return pedidoMaisProximo
    } else {
     pedidoMaisProximo = pedidoAtual;
     return pedidoMaisProximo;
    }
   
   })
         
   console.log(`O pedido mais próximo é o de ${pedido.nome}, do tipo ${pedido.tipo}`);
   
   
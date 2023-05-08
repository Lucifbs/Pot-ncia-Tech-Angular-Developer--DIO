const restaurantes = [

    {
   
     nome: gets(), 
   
     avaliacao: parseFloat(gets())
   
    },
   
    {
   
     nome: gets(), 
   
     avaliacao: parseFloat(gets())
   
    }
   
   ];
      
   
   const restaurante = restaurantes.reduce((restautanteAvaliacao, restauranteAtual) => {
   
    if (restautanteAvaliacao.avaliacao > restauranteAtual.avaliacao) {
   
     return restautanteAvaliacao;
   
    } else {
   
     return restauranteAtual
   
    }
   
   });
         
   console.log(`Restaurante: ${restaurante.nome}, Avaliação: ${restaurante.avaliacao.toFixed(1)}`);
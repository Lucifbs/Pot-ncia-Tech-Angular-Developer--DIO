const cliente1 = { 

    nome: gets(), 
   
    item: gets(), 
   
    preco: parseFloat(gets())
   
   };
     
   
   // JSON do Cliente 2
   
   const cliente2 = { 
   
    nome: gets(), 
   
    item: gets(), 
   
    preco: parseFloat(gets()) 
   
   };
   //**Usei o if para comparar os campos
   
     
   if ((cliente1.nome === cliente2.nome) && (cliente1.item === cliente2.item) && (cliente1.preco === cliente2.preco)){
   
    console.log("Os pedidos são iguais");
   
   }else {
   
    console.log("Os pedidos são diferentes")
   
   };

   //O objetivo desse desafio é criar um programa em JavaScript que compare dois objetos
   // JSON de pedidos de entrega e determine se eles possuem ou não as mesmas informações.
   // O programa deve criar dois objetos JSON contendo o nome do cliente, além do nome
   // e preço de um item selecionado.
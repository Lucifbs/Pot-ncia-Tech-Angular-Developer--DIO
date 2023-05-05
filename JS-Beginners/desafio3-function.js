
function aplicarDesconto(valor, desconto) {
    return (valor -(valor * (desconto /100)));
}

function aplicarJuros(valor, juros) {
    return (valor +(valor *(juros/100)));
}

const pagamento = 1;

const precoEtiqueta = 100;

if (pagamento === 1){

    console.log(aplicarDesconto(precoEtiqueta,10));

}else if (pagamento === 2){
   
    console.log(aplicarDesconto(precoEtiqueta,15));

}else if (pagamento === 3){

      console.log(precoEtiqueta);

}else {
      console.log(aplicarJuros(precoEtiqueta,10));
    }


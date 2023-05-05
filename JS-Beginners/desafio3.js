
const pagamento = '4';

const precoEtiqueta = 100;

if (pagamento === '1'){

    const valorPag = precoEtiqueta-(precoEtiqueta*0.1);

    console.log(valorPag);

}else if (pagamento === '2'){

    const valorPag = precoEtiqueta - (precoEtiqueta*0.15);

    console.log(valorPag);

}else if (pagamento === '3'){

      console.log(precoEtiqueta);

}else {
      console.log(precoEtiqueta + (precoEtiqueta*0.1))};




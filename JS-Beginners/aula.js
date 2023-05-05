
const priceEtanol = 5.79;

const priceGasolina = 6.66;

const KmPorLitro = 10;

const distanciaEmKm = 100;

const tipoCompustivel = 'Etanol';


const litrosConsumido = distanciaEmKm / KmPorLitro;

if (tipoCompustivel === 'Etanol') {

    const valorGasto = litrosConsumido * priceEtanol;

    console.log(valorGasto.toFixed(2));

} else {

    const valorGasto = litrosConsumido * priceGasolina;

    console.log(valorGasto.toFixed(2));
}









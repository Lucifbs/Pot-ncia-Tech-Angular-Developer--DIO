class Carro {
    marca;
    cor;
    gastoMedioPorKm;


constructor(marca,cor,gastoMedioPorKm){
    this.marca = marca;
    this.cor = cor;
    this.gastoMedioPorKm = gastoMedioPorKm;

    }

    calcularGastoDePercurso(distanciaKm,precoCombustivel){
        return distanciaKm*this.gastoMedioPorKm*precoCombustivel;
    }          

}

const uno = new Carro('Fiat','Prata', 1/12);
console.log(uno.calcularGastoDePercurso(70,5));

const gol = new Carro('Wolks', 'Prata', 1/10);
console.log(gol.calcularGastoDePercurso(70,5));
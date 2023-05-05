class Pessoa {

    nome;
    idade;
    anoDeNascimento;    

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2022 - idade;
    }

    descrever(){
        console.log(`Meu nome e ${this.nome} e minha idade e ${this.idade}`);
    }
}


function compararPessoas(p1, p2) {
    if(p1.idade > p2.idade) {
        console.log(`${p1.nome} is more older than ${p2.nome}`);
    }else if(p2.idade > p1.idade){
        console.log(`${p2.nome} is more older than ${p1.nome}`);
    }else {
        console.log(`${p1.nome} e ${p2.nome} have the same idade`);
    }
}

const vitor = new Pessoa('Vitor',25);

const renan = new Pessoa('Renan',30);

compararPessoas(vitor,renan);
 
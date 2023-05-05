
function escrevaNome(nome) {
    return ('Meu nome e ' + nome);
}

function verificaridade(idade) {
    if (idade >= 18) {
        console.log(escrevaNome('lu') +' Maior');
    }else {
        console.log('Menor');
    }
}

verificaridade(20);
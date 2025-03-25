let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular(){
    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;

    let qdtTotalCarne = carnePorPessoa(duracao) * adultos + (carnePorPessoa(duracao) / 2 * criancas);
    let qdtTotalCerveja = carnePorPessoa(duracao) * adultos;
    let qdtTotalBebidas = bebidasPorPessoa(duracao) * adultos + (bebidasPorPessoa(duracao) / 2 * criancas);

}

function carnePorPessoa(duracao){
    if (duracao >= 6){
        return 650;
    }else{
        return 400;
    }
}

function cervejaPorPessoa(duracao){
    if (duracao >= 6){
        return 2000;
    }else{
        return 1200;
    }
}

function bebidasPorPessoa(duracao){
    if (duracao >= 6){
        return 1500;
    }else{
        return 1000;
    }
}

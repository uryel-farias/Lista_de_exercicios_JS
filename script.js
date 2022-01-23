//exercicio 1.01----------------------------------
function Ativar1_primeiroEx(){
    window.alert('Olá mundo!');
}

const butao_ex01 = document.querySelector('#botao1_01');
butao_ex01.addEventListener('click', Ativar1_primeiroEx);

//exercicio 1.02----------------------------------
function Ativar1_segundoEx (){
    let resultado = document.querySelector('#resultado_1-02');
    let conteudo = document.querySelector('#questao_1-02');
    conteudo = conteudo.value;
    return resultado.innerHTML = ('O número digitado foi: ' + conteudo);
    //return resultado.innerHTML = resultado;
}

const butao_ex02 = document.querySelector('#botao1_02');
butao_ex02.addEventListener('click', Ativar1_segundoEx);

//exercicio 1.03----------------------------------
function Ativar_terceiroEx(){
    let entrada1Ex3 = document.querySelector('#questao3b');
    let entrada2Ex3 = document.querySelector('#questao3b');
    let soma = entrada1Ex3.value + entrada2Ex3.value;
    let resultado = document.querySelector('#resultado_1-03');
    return resultado.innerHTML = ('A soma dos dos números informados é: ' + soma.value);
}

let botao_ex03 = document.querySelector('#botao1_03');
botao_ex03.addEventListener('click', Ativar_terceiroEx);

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
  
}

const butao_ex02 = document.querySelector('#botao1_02');
butao_ex02.addEventListener('click', Ativar1_segundoEx);

//exercicio 1.03----------------------------------
function Ativar1_terceiroEx(){
    let entrada1Ex3 = document.querySelector('#questao3a').value;
    let entrada2Ex3 = document.querySelector('#questao3b').value;
    let resultado = document.querySelector('#resultado_1-03');
   
    let soma = parseFloat(entrada1Ex3) + parseFloat(entrada2Ex3);
    
    return resultado.innerHTML = (`A soma dos números informados é: ${soma}`);
    //
}

let botao_ex03 = document.querySelector('#botao1_03');
botao_ex03.addEventListener('click', Ativar1_terceiroEx);

//exercicio 1.04----------------------------------

function Ativar1_quartoEx(){
    let entrada1Ex4 = parseFloat(document.querySelector('#questao4a').value);
    let entrada2Ex4 = parseFloat(document.querySelector('#questao4b').value);
    let entrada3Ex4 = parseFloat(document.querySelector('#questao4c').value);
    let entrada4Ex4 = parseFloat(document.querySelector('#questao4d').value);
    let resultadoEx4 = document.querySelector('#resultado_1-04');  

    let media = (entrada1Ex4 + entrada2Ex4 + entrada3Ex4 + entrada4Ex4)/4;

    return resultadoEx4.innerHTML = (`A média das notas informadas é: ${media}`);
}


let botao_ex04 = document.querySelector('#botao1_04');
botao_ex04.addEventListener('click', Ativar1_quartoEx);

//exercicio 1.05----------------------------------

let Ativar1_quintoEx = () => {
    let resultadoEx5 = document.querySelector('#resultado_1-05');
    let entradaEx5 = parseFloat(document.querySelector('#questao5').value);

    let converter_metro_cm = entradaEx5 * 100;

    return resultadoEx5.innerHTML = (`${entradaEx5} metro(s) é equivalente a ${converter_metro_cm} centinetros.`); 
}

let botao_ex05 = document.querySelector('#botao1_05');
botao_ex05.addEventListener('click', Ativar1_quintoEx);

//exercicio 1.06----------------------------------

let Ativar1_sextoEx = () => {
let resultadoEx6 = document.querySelector('#resultado_1-06');
let entradaEx6 = parseFloat(document.querySelector('#questao6').value);

let area_do_circulo = 3.14 * (entradaEx6 * entradaEx6);

return resultadoEx6.innerHTML = (`Dado o raio de valor ${entradaEx6}cm, sua área corresponde à ${area_do_circulo}cm.`);
}

let botao_ex06 = document.querySelector('#botao1_06');
botao_ex06.addEventListener('click', Ativar1_sextoEx);

//exercicio 1.07----------------------------------
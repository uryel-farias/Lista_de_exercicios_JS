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

let Ativar1_setimoEx = () => {
    let resultadoEx7 = document.querySelector('#resultado_1-07');
    let entradaEx7 = parseFloat(document.querySelector('#questao7').value);

    let areaDoQuadrado = entradaEx7 * entradaEx7;

    return resultadoEx7.innerHTML = (`O valor da área do quadrado é: ${areaDoQuadrado}` + "<br>"+ `O valor do dobro dessa área é: ${areaDoQuadrado*2}`);
    
}

let botao_ex07 = document.querySelector('#botao1_07');
botao_ex07.addEventListener('click', Ativar1_setimoEx);

//exercicio 1.08----------------------------------

let Ativar1_oitavoEx = () => {
    let resultadoEx8 = document.querySelector('#resultado_1-08');
    let entrada1Ex8 = parseFloat(document.querySelector('#questao8a').value);
    let entrada2Ex8 = parseFloat(document.querySelector('#questao8b').value);

    let salarioMes = entrada1Ex8 * entrada2Ex8;

    return resultadoEx8.innerHTML = (`O valor do salário do mês é: ${salarioMes.toFixed(2)}`);

}

let botao_ex08 = document.querySelector('#botao1_08');
botao_ex08.addEventListener('click', Ativar1_oitavoEx);

//exercicio 1.09----------------------------------

let Ativar1_nonoEx = () => {
    let resultadoEx9 = document.querySelector('#resultado_1-09');
    let entrada1Ex9 = parseFloat(document.querySelector('#questao9').value);

    let grausCelsius = 5 * ((entrada1Ex9- 32)/9);

    return resultadoEx9.innerHTML = (`${entrada1Ex9}° Fahrenheit é equivalente à ${grausCelsius.toFixed(1)}° Celsius.`);

}

let botao_ex09 = document.querySelector('#botao1_09');
botao_ex09.addEventListener('click', Ativar1_nonoEx);

//exercicio 1.10----------------------------------

let Ativar1_decimoEx = () => {
    let resultadoEx10 = document.querySelector('#resultado_1-10');
    let entrada1Ex10 = parseFloat(document.querySelector('#questao10').value);

    let grausFahrenheit = entrada1Ex10 * 1.8 + 32;

    return resultadoEx10.innerHTML = (`${entrada1Ex10}° Celsius é equivalente à ${grausFahrenheit.toFixed(1)}° Fahrenheit.`);
}

let botao_ex10 = document.querySelector('#botao1_10');
botao_ex10.addEventListener('click', Ativar1_decimoEx);

//exercicio 1.11----------------------------------

let Ativar1_decimoPrimeiroEx = () => {
    let entrada1Ex11 = parseInt(document.querySelector('#questao11a').value);
    let entrada2Ex11 = parseInt(document.querySelector('#questao11b').value);
    let entrada3Ex11 = parseFloat(document.querySelector('#questao11c').value);

    let resultadoEx11a = document.querySelector('#item1Ex11'); 
    let resultadoEx11b = document.querySelector('#item2Ex11'); 
    let resultadoEx11c = document.querySelector('#item3Ex11'); 

    let calcularItem1 = (entrada1Ex11 * 2) * (entrada2Ex11/2);
    let calcularItem2 = (entrada1Ex11 * 3) + entrada3Ex11;
    let calcularItem3 = entrada3Ex11 * entrada3Ex11 * entrada3Ex11;

    resultadoEx11a.innerHTML = (`${calcularItem1}`);
    resultadoEx11b.innerHTML = (`${calcularItem2}`);
    resultadoEx11c.innerHTML = (`${calcularItem3.toFixed(2)}`);
    
}

let botao_ex11 = document.querySelector('#botao1_11');
botao_ex11.addEventListener('click', Ativar1_decimoPrimeiroEx);

//exercicio 1.12----------------------------------

let Ativar1_DecimoSegundoEX = () => {
    let entrada1Ex12 = parseFloat(document.querySelector('#questao12').value);
    let resultadoEx12 = document.querySelector('#resultado_1-12');

    let calcularImc = ((72.7 * entrada1Ex12)/100) - 58;

    return resultadoEx12.innerHTML = (`Dada sua Altura como ${entrada1Ex12} cm seu peso ideia seria ${calcularImc.toFixed(2)} kg.`);
}

let botao_ex12 = document.querySelector('#botao1_12');
botao_ex12.addEventListener('click', Ativar1_DecimoSegundoEX);

//exercicio 1.13----------------------------------

let Ativar1_DecimoTerceiroEX = () => {
    let entrada1Ex13 = parseFloat(document.querySelector('#questao13').value);
    let resultadoEx13a = document.querySelector('#resultado_1-13a');
    let resultadoEx13b = document.querySelector('#resultado_1-13b');

    let calcularImcHomem = ((72.7 * entrada1Ex13)/100) - 58;
    let calcularImcMulher = ((62.1 * entrada1Ex13)/100) - 47.7;

    resultadoEx13a.innerHTML = (`${calcularImcHomem.toFixed(2)} kg.`);
    resultadoEx13b.innerHTML = (`${calcularImcMulher.toFixed(2)} kg.`);
}

let botao_ex13 = document.querySelector('#botao1_13');
botao_ex13.addEventListener('click', Ativar1_DecimoTerceiroEX);

//exercicio 1.14----------------------------------

let Ativar1_DecimoQuartoEX = () => {
    let entrada1Ex14 = parseFloat(document.querySelector('#questao14').value);
    let resultadoEx14a = document.querySelector('#resultado_1-14a');
    let resultadoEx14b = document.querySelector('#resultado_1-14b');

    let ValorMulta = entrada1Ex14 > 50? ('R$ ' + ((entrada1Ex14 - 50) * 4).toFixed(2)) : 'Não há multa, pois não exedeu o limite espeficado.';

    resultadoEx14a.innerHTML = (`${entrada1Ex14} KG.`);
    resultadoEx14b.innerHTML = (`${ValorMulta}.`);
}

let botao_ex14 = document.querySelector('#botao1_14');
botao_ex14.addEventListener('click', Ativar1_DecimoQuartoEX);

//exercicio 1.15----------------------------------

let Ativar1_DecimoQuintoEX = () => {
    let entrada1Ex15a = parseFloat(document.querySelector('#questao15a').value);
    let entrada1Ex15b = parseFloat(document.querySelector('#questao15b').value);
    
    let resultadoEx15a = document.querySelector('#resultado_15-1');
    let resultadoEx15b = document.querySelector('#resultado_15-2');
    let resultadoEx15c = document.querySelector('#resultado_15-3');
    let resultadoEx15d = document.querySelector('#resultado_15-4');
    let resultadoEx15e = document.querySelector('#resultado_15-5');

    let salarioBruto = entrada1Ex15a * entrada1Ex15b;
    let descontoIr = salarioBruto * 0.11;
    let descontoInss = salarioBruto * 0.08;
    let descontoSindicato = salarioBruto * 0.05;
    let salarioLiquido = salarioBruto - (descontoInss + descontoIr + descontoSindicato);
    
    resultadoEx15a.innerHTML =(`${salarioBruto.toFixed(2)}.`);
    resultadoEx15b.innerHTML =(`${descontoIr.toFixed(2)}.`);
    resultadoEx15c.innerHTML =(`${descontoInss.toFixed(2)}.`);
    resultadoEx15d.innerHTML =(`${descontoSindicato.toFixed(2)}.`);
    resultadoEx15e.innerHTML =(`${salarioLiquido.toFixed(2)}.`);
}


let botao_ex15 = document.querySelector('#botao1_15');
botao_ex15.addEventListener('click', Ativar1_DecimoQuintoEX);

//exercicio 1.16----------------------------------

let Ativar1_DecimoSextoEX = () => {
    let entrada1Ex16 = parseFloat(document.querySelector('#questao16').value);
    let resultadoEx16 = document.querySelector('#resultado_1-16');

    let quantidadeLatas = Math.ceil((entrada1Ex16 / 3) / 18);
    
    return resultadoEx16.innerHTML = (`Será(ão) necessário(s) ${quantidadeLatas} lata(s) de tinta.`);
}

let botao_ex16 = document.querySelector('#botao1_16');
botao_ex16.addEventListener('click', Ativar1_DecimoSextoEX);

//exercicio 1.17----------------------------------

let Ativar1_DecimoSetimoEX = () => {
    let entrada1Ex17 = parseFloat(document.querySelector('#questao17').value);
    let resultadoEx17a = document.querySelector('#resultado_1-17a');
    let resultadoEx17b = document.querySelector('#resultado_1-17b');
    let resultadoEx17c = document.querySelector('#resultado_1-17c');

    let somenteLatas18Litros = Math.ceil((entrada1Ex17 / 6) / 18);
    let somentelatas3Litros = Math.ceil((entrada1Ex17 /6) / 3.6);

    let parteLatas18Litros = (entrada1Ex17 / 6) / 18;
    let latas18Arredondada = Math.floor(parteLatas18Litros);
    let sobraDe18litros = parteLatas18Litros % 18;
    let latas3LitrosArredondada = (Math.ceil((sobraDe18litros / 6) / 3.6))*25;
    let latasAte108Metros = entrada1Ex17 <=108 && entrada1Ex17 > 64.8? somenteLatas18Litros*80 : latas18Arredondada*80 + latas3LitrosArredondada;   

    resultadoEx17a.innerHTML = (`R$ ${(somenteLatas18Litros * 80).toFixed(2)}.`);
    resultadoEx17b.innerHTML = (`R$ ${(somentelatas3Litros * 25).toFixed(2)}.`);
    resultadoEx17c.innerHTML = (`R$ ${entrada1Ex17 <= 64.8? (somentelatas3Litros*25).toFixed(2): latasAte108Metros.toFixed(2)}.`);
 
}

let botao_ex17 = document.querySelector('#botao1_17');
botao_ex17.addEventListener('click', Ativar1_DecimoSetimoEX);

//exercicio 1.18----------------------------------


let Ativar1_DecimoOitavoEX = () => {
    let entrada1Ex18a = parseFloat(document.querySelector('#questao18a').value);
    let entrada1Ex18b = parseFloat(document.querySelector('#questao18b').value);
    let resultadoEx18 = document.querySelector('#resultado_1-18');

    let calcularTempoDownload = Number(Math.ceil((entrada1Ex18a / (entrada1Ex18b/8))/60));

    return resultadoEx18.innerHTML = (`O tempo de download do arquivo será de ${calcularTempoDownload} minuto(s).`);
} 

let botao_ex18 = document.querySelector('#botao1_18');
botao_ex18.addEventListener('click', Ativar1_DecimoOitavoEX);




//--------------------Inicio da Estrutura Condicional-----------------
//exercicio 2.01------------------------------------------------------

let Ativar2_primeiroEx = () => {
    let entrada2Ex01a = parseFloat(document.querySelector('#entrada-2-01a').value);
    let entrada2Ex01b = parseFloat(document.querySelector('#entrada-2-01b').value);
    let resultado2Ex01 = document.querySelector('#resultado-2-01');

    let maiorValor = 0;

    if(entrada2Ex01a > entrada2Ex01b){
        maiorValor = entrada2Ex01a;
    } else if (entrada2Ex01b > entrada2Ex01a) {
        maiorValor = entrada2Ex01b;
    } else {
        maiorValor = entrada2Ex01a + ', neste caso os valores são iguais';
    }

    return resultado2Ex01.innerHTML = (`O maior valor informado é ${maiorValor}.`);
}

let botao2_ex01 = document.querySelector('#botao2_01');
botao2_ex01.addEventListener('click', Ativar2_primeiroEx);


//exercicio 2.02------------------------------------------------------

let Ativar2_segundoEx = () => {
    let entrada2Ex02 = parseFloat(document.querySelector('#entrada-2-02').value);
    let resultado2Ex02 = document.querySelector('#resultado-2-02');
    let solucaoEx2;
    if (entrada2Ex02 > 0){
        solucaoEx2 = 'O valor ' + entrada2Ex02 + ' é um número positivo.';
    } else if (entrada2Ex02 < 0){
        solucaoEx2 = 'O valor ' + entrada2Ex02 + ' é um número negativo.';
    } else {
        solucaoEx2 = 'O valor ' + entrada2Ex02 + ' é um número neutro.';
    }

    return resultado2Ex02.innerHTML = (solucaoEx2);
}

let botao2_ex02 = document.querySelector('#botao2_02');
botao2_ex02.addEventListener('click', Ativar2_segundoEx);

//exercicio 2.03------------------------------------------------------

let Ativar2_terceiroEx = () => {
    let entrada2Ex03 = document.querySelector('#entrada-2-03').value;
    let resultado2Ex03 = document.querySelector('#resultado-2-03');

    let fminusculo = 'f';
    let fmaiusculo = 'F';
    let mminusculo = 'm';
    let mmaiusculo = 'M';
    let mostrarletra = '';

    if(entrada2Ex03 === fminusculo || entrada2Ex03 === fmaiusculo){
        mostrarletra = 'F - Feminino'
    } else if (entrada2Ex03 === mmaiusculo || entrada2Ex03 === mminusculo){
        mostrarletra = 'M - Masculino';
    } else {
        mostrarletra = 'Sexo Inválido';
    }
    return resultado2Ex03.innerHTML = (mostrarletra);

}


let botao2_ex03 = document.querySelector('#botao2_03');
botao2_ex03.addEventListener('click', Ativar2_terceiroEx);

//exercicio 2.04------------------------------------------------------
//exercicio 2.05------------------------------------------------------
//exercicio 2.06------------------------------------------------------
//exercicio 2.07------------------------------------------------------
//exercicio 2.08------------------------------------------------------
//exercicio 2.09------------------------------------------------------
//exercicio 2.10------------------------------------------------------
//exercicio 2.11------------------------------------------------------
//exercicio 2.12------------------------------------------------------
//exercicio 2.13------------------------------------------------------
//exercicio 2.14------------------------------------------------------
//exercicio 2.15------------------------------------------------------
//exercicio 2.16------------------------------------------------------
//exercicio 2.17------------------------------------------------------
//exercicio 2.18------------------------------------------------------
//exercicio 2.19------------------------------------------------------
//exercicio 2.20------------------------------------------------------
//exercicio 2.21------------------------------------------------------
//exercicio 2.22------------------------------------------------------
//exercicio 2.23------------------------------------------------------
//exercicio 2.24------------------------------------------------------
//exercicio 2.25------------------------------------------------------
//exercicio 2.26------------------------------------------------------
//exercicio 2.27------------------------------------------------------
//exercicio 2.28------------------------------------------------------


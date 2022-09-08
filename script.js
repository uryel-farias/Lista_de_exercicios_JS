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

let Ativar2_quartoEx = () => {
    let entrada2Ex04 = document.querySelector('#entrada-2-04').value;
    let resultado2Ex04 = document.querySelector('#resultado-2-04');
    let vogais = ['a','e','i','o','u'];
    let verificarVogal = false;
    let eVogal = 'O digito que você informou é uma VOGAL.'
    let eConsoante = 'O digito que você informou é uma CONSOANTE.'

    for(let index = 0; index < vogais.length; index++){
        if (entrada2Ex04 == vogais[index]){
            verificarVogal = true;
        }
    }

    if (verificarVogal){
        resultado2Ex04.innerHTML = (eVogal);
    }else {
        resultado2Ex04.innerHTML = (eConsoante);
    }

  

    
    }   



let botao2_ex04 = document.querySelector('#botao2_04');
botao2_ex04.addEventListener('click', Ativar2_quartoEx);
//exercicio 2.05------------------------------------------------------

let Ativar2_quintoEX = () => {
    let entrada2Ex05a = +document.querySelector('#entrada-2-05a').value;
    let entrada2Ex05b = +document.querySelector('#entrada-2-05b').value;
    let resultado2Ex05 = document.querySelector('#resultado-2-05');
    let media = (entrada2Ex05a + entrada2Ex05b)/2;

    if(media === 10){
        resultado2Ex05.innerHTML = ('Media = ' + media.toFixed(2) + ' --- Aluno(a) Aprovado com Destinção!');
    }else if( media < 7){
        resultado2Ex05.innerHTML = ('Media = ' + media.toFixed(2) + ' --- Aluno(a) Reprovado!');
    } else if (media >= 7 ){
        resultado2Ex05.innerHTML = ('Media = ' + media.toFixed(2) + ' --- Aluno(a) Aprovado!');
    }
}

let botao2_ex05 = document.querySelector('#botao2_05');
botao2_ex05.addEventListener('click', Ativar2_quintoEX);

//exercicio 2.06------------------------------------------------------

let Ativar2_sextoEX = () => {
    let entrada2Ex06a = +document.querySelector('#entrada-2-06a').value;
    let entrada2Ex06b = +document.querySelector('#entrada-2-06b').value;
    let entrada2Ex06c = +document.querySelector('#entrada-2-06c').value;
    let resultado2Ex06 = document.querySelector('#resultado-2-06');

    let maiorNumero = 0;

    if(entrada2Ex06a >= entrada2Ex06b){
        maiorNumero = entrada2Ex06a;
    } else if (entrada2Ex06b >= maiorNumero) {
        maiorNumero = entrada2Ex06b;
    } 
    if (entrada2Ex06c > maiorNumero) {
        maiorNumero = entrada2Ex06c;
    } 

    resultado2Ex06.innerHTML = ('O maior número digitado foi: ' + maiorNumero + '.');
}

let botao2_ex06 = document.querySelector('#botao2_06');
botao2_ex06.addEventListener('click', Ativar2_sextoEX);

//exercicio 2.07------------------------------------------------------

let Ativar2_setimoEX = () => {
    let entrada2Ex07a = +document.querySelector('#entrada-2-07a').value;
    let entrada2Ex07b = +document.querySelector('#entrada-2-07b').value;
    let entrada2Ex07c = +document.querySelector('#entrada-2-07c').value;
    let resultado2Ex07 = document.querySelector('#resultado-2-07');

    let menorNumero = entrada2Ex07a  ;

    if(entrada2Ex07a <= entrada2Ex07b){
        menorNumero = entrada2Ex07a;
    } else if (entrada2Ex07b <= menorNumero) {
        menorNumero = entrada2Ex07b;
    } 
    if (entrada2Ex07c < menorNumero) {
        menorNumero = entrada2Ex07c;
    } 

    resultado2Ex07.innerHTML = ('O menor número digitado foi: ' + menorNumero + '.');
}

let botao2_ex07 = document.querySelector('#botao2_07');
botao2_ex07.addEventListener('click', Ativar2_setimoEX);
//exercicio 2.08------------------------------------------------------

let Ativar2_oitavoEX = () => {
    let entrada2Ex08a = +document.querySelector('#entrada-2-08a').value;
    let entrada2Ex08b = +document.querySelector('#entrada-2-08b').value;
    let entrada2Ex08c = +document.querySelector('#entrada-2-08c').value;
    let resultado2Ex08a = document.querySelector('#resultado-2-08a');
    let resultado2Ex08b = document.querySelector('#resultado-2-08b');


    let menorNumero = entrada2Ex08a  ;

    if(entrada2Ex08a <= entrada2Ex08b){
        menorNumero = entrada2Ex08a;
    } else if (entrada2Ex08b <= menorNumero) {
        menorNumero = entrada2Ex08b;
    } 
    if (entrada2Ex08c < menorNumero) {
        menorNumero = entrada2Ex08c;
    } 

    let maiorNumero = 0;

    if(entrada2Ex08a >= entrada2Ex08b){
        maiorNumero = entrada2Ex08a;
    } else if (entrada2Ex08b >= maiorNumero) {
        maiorNumero = entrada2Ex08b;
    } 
    if (entrada2Ex08c > maiorNumero) {
        maiorNumero = entrada2Ex08c;
    } 

    resultado2Ex08a.innerHTML = ('O produto mais barato: R$ ' + menorNumero + '.');
    resultado2Ex08b.innerHTML = ('O produto mais caro: R$ ' + maiorNumero + '.');
}

let botao2_ex08 = document.querySelector('#botao2_08');
botao2_ex08.addEventListener('click', Ativar2_oitavoEX);
//exercicio 2.09------------------------------------------------------

let Ativar2_nonoEX = () => {
    let entrada2Ex09a = +document.querySelector('#entrada-2-09a').value;
    let entrada2Ex09b = +document.querySelector('#entrada-2-09b').value;
    let entrada2Ex09c = +document.querySelector('#entrada-2-09c').value;
    let resultado2Ex09 = document.querySelector('#resultado-2-09');


    let menorNumero = entrada2Ex09a  ;

    if(entrada2Ex09a <= entrada2Ex09b){
        menorNumero = entrada2Ex09a;
    } else if (entrada2Ex09b <= menorNumero) {
        menorNumero = entrada2Ex09b;
    } 
    if (entrada2Ex09c < menorNumero) {
        menorNumero = entrada2Ex09c;
    } 

    let maiorNumero = 0;

    if(entrada2Ex09a >= entrada2Ex09b){
        maiorNumero = entrada2Ex09a;
    } else if (entrada2Ex09b >= maiorNumero) {
        maiorNumero = entrada2Ex09b;
    } 
    if (entrada2Ex09c > maiorNumero) {
        maiorNumero = entrada2Ex09c;
    } 

    let somaDosNumeros = entrada2Ex09a + entrada2Ex09b + entrada2Ex09c;
    let numeroMeio = somaDosNumeros - maiorNumero - menorNumero; 

    resultado2Ex09.innerHTML = ('Números digitados em ordem crescente: : ' + menorNumero + ' - ' + numeroMeio + ' - ' + maiorNumero + '.' );
}

let botao2_ex09 = document.querySelector('#botao2_09');
botao2_ex09.addEventListener('click', Ativar2_nonoEX);

//exercicio 2.10------------------------------------------------------

let Ativar2_decimoEx = () => {
    let entrada2Ex10 = document.querySelector('#entrada-2-10').value;
    let resultado2Ex10 = document.querySelector('#resultado-2-10');

    if(entrada2Ex10==='M' || entrada2Ex10==='m'){
        resultado2Ex10.innerHTML = ('Bom Dia!');
    }else if (entrada2Ex10==='V' || entrada2Ex10==='v'){
        resultado2Ex10.innerHTML = ('Boa Tarde!');
    }else if (entrada2Ex10==='N' || entrada2Ex10==='n'){
        resultado2Ex10.innerHTML = ('Boa Noite!');
    }else {
        resultado2Ex10.innerHTML = ('Valor Inválido!');
    }

}

let botao2_ex10 = document.querySelector('#botao2_10');
botao2_ex10.addEventListener('click', Ativar2_decimoEx);
//exercicio 2.11------------------------------------------------------

let Ativar2_decimoPrimeiroEx = () => {
    let entrada2Ex11 = +document.querySelector('#entrada-2-11').value;
    let resultado2Ex11a = document.querySelector('#resultado-2-11a');
    let resultado2Ex11b = document.querySelector('#resultado-2-11b');
    let resultado2Ex11c = document.querySelector('#resultado-2-11c');
    let resultado2Ex11d = document.querySelector('#resultado-2-11d');

    let salarioAntes, percentual, valorAumento, salarioReajuste;
    if(entrada2Ex11 > 0 && entrada2Ex11 <= 280){
        salarioAntes = entrada2Ex11;
        percentual = "20%";
        salarioReajuste = salarioAntes * 1.2;
        valorAumento = salarioReajuste - salarioAntes;
    }else if (entrada2Ex11 > 280 && entrada2Ex11 <= 700){
        salarioAntes = entrada2Ex11;
        percentual = "15%";
        salarioReajuste = salarioAntes * 1.15;
        valorAumento = salarioReajuste - salarioAntes;
    }else if (entrada2Ex11 > 700 && entrada2Ex11 <= 1500){
        salarioAntes = entrada2Ex11;
        percentual = "10%";
        salarioReajuste = salarioAntes * 1.1;
        valorAumento = salarioReajuste - salarioAntes;
    }else if (entrada2Ex11 > 1500){
        salarioAntes = entrada2Ex11;
        percentual = "5%";
        salarioReajuste = salarioAntes * 1.05;
        valorAumento = salarioReajuste - salarioAntes;
    } else {
        resultado2Ex11a.innerHTML = ('Valor Inválido!');
        resultado2Ex11b.innerHTML = ('');
        resultado2Ex11c.innerHTML = ('');
        resultado2Ex11d.innerHTML = ('');
    }

    resultado2Ex11a.innerHTML = ('Sálário antes do reajuste: R$ ' + salarioAntes.toFixed(2));
    resultado2Ex11b.innerHTML = ('Percentual de aumento: ' + percentual);
    resultado2Ex11c.innerHTML = ('Valor do aumento: R$ ' + valorAumento.toFixed(2));
    resultado2Ex11d.innerHTML = ('Salário após o aumento: R$ ' + salarioReajuste.toFixed(2));

}

let botao2_ex11 = document.querySelector('#botao2_11');
botao2_ex11.addEventListener('click', Ativar2_decimoPrimeiroEx);

//exercicio 2.12------------------------------------------------------
let Ativar2_decimoSegundoEx = () => {
    let entrada2Ex12a = +document.querySelector('#entrada-2-12a').value;
    let entrada2Ex12b = +document.querySelector('#entrada-2-12b').value;

    let resultado2Ex12a = document.querySelector('#resultado-2-12a');
    let resultado2Ex12b = document.querySelector('#resultado-2-12b');
    let resultado2Ex12c = document.querySelector('#resultado-2-12c');
    let resultado2Ex12d = document.querySelector('#resultado-2-12d');
    let resultado2Ex12e = document.querySelector('#resultado-2-12e');
    let resultado2Ex12f = document.querySelector('#resultado-2-12f');

    let salarioBruto = entrada2Ex12a * entrada2Ex12b;
    let inss = 0.10; 
    let fgts = 0.11;
    let salarioFinal, descontoIr, descontoFgts, totalDescontos;


    if(salarioBruto <= 900 ){
        descontoIr = 0;
        descontoInss = salarioBruto * inss;
        descontoFgts = salarioBruto * fgts;
        totalDescontos = descontoInss;
        salarioFinal = salarioBruto - descontoInss;
    }else if ((salarioBruto > 900) && (salarioBruto <= 1500)){
        descontoIr = salarioBruto * 0.05;
        descontoInss = salarioBruto * inss;
        descontoFgts = salarioBruto * fgts;
        totalDescontos = descontoIr + descontoInss;
        salarioFinal = salarioBruto - totalDescontos;
    }else if ((salarioBruto > 1500) && (salarioBruto <= 2500)){
        descontoIr = salarioBruto * 0.10;
        descontoInss = salarioBruto * inss;
        descontoFgts = salarioBruto * fgts;
        totalDescontos = descontoIr + descontoInss;
        salarioFinal = salarioBruto - totalDescontos;
    }else if ( salarioBruto > 2500){
        descontoIr = salarioBruto * 0.20;
        descontoInss = salarioBruto * inss;
        descontoFgts = salarioBruto * fgts;
        totalDescontos = descontoIr + descontoInss;
        salarioFinal = salarioBruto - totalDescontos;
    }

    resultado2Ex12a.innerHTML = ('Sálário Bruto: R$ ' + salarioBruto.toFixed(2));
    resultado2Ex12b.innerHTML = ('(-) IR: R$ ' + descontoIr.toFixed(2));
    resultado2Ex12c.innerHTML = ('(-) INSS: R$ ' + descontoInss.toFixed(2));
    resultado2Ex12d.innerHTML = ('FGTS (11%): R$ ' + descontoFgts.toFixed(2));
    resultado2Ex12e.innerHTML = ('Total de descontos: R$ ' + totalDescontos.toFixed(2));
    resultado2Ex12f.innerHTML = ('Salário Líquido: R$ ' + salarioFinal.toFixed(2));

}

let botao2_ex12 = document.querySelector('#botao2_12');
botao2_ex12.addEventListener('click', Ativar2_decimoSegundoEx);
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


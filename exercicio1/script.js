/* Crie uma página HTML com dois campos de entrada de números e botões para 
as operações de soma, subtração, multiplicação e divisão. 
Utilize Javascript para capturar os valores digitados e exibir o 
resultado da operação selecionada.*/
var valor1 = document.querySelector("#valor1");
var valor2 = document.querySelector("#valor2");
var soma = document.querySelector("#soma");
var subtracao = document.querySelector("#subtracao");
var multiplicacao = document.querySelector("#multiplicacao");
var divisao = document.querySelector("#divisao");

soma.addEventListener("click", () => {
    resultado = parseFloat(valor1.value) + parseFloat(valor2.value);
    alert(resultado);
});
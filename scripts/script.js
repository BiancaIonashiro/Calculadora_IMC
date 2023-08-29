/*Mão na massa: Algoritmo e lógica de programação.
1.Descrição: Calculadora Imc.
2.Ações necessárias para a realização + 3.Ordenação lógica das ações.
Passo-a-passo:
A- Definição de lista de campos do formulário: Sexo, idade, peso, altura;
A.1- Criação de campos: Inserção de dados.
B- Validador de preenchimento da lista de campos I: Todos os campos com o preenchimento obrigatório;
B.1- Validador de preenchimento da lista de campos II: Condicional para cada campo com critérios lógico para input válido;
B.2- Validador de preenchimento da lista de campos III: Se válido - Realização de cálculo com as informações preenchidas da 
lista ou então retorno com a mensagem para preenchimento da lista de campos, conforme os critérios estabelecidos para 
validação.
C- Cálculo: Incluir a fórmula do imc para obter o resultado de cálculo com os dados preenchidos;
C.1- Definição: Incluir parametros do imc para obter o critério de descrição com o resultado.
D- Criação de botão: Input do cálculo.
D.1- Criação de impressão: Output do cálculo + definição = resultado.
E. Criação do botão para resetar lista de campos com as informações + impressão de calculo + definição do resultado dos 
dados preenchidos.
4.Conclusão.*/
//1.Descrição de objeto: Calculadora de IMC//
/*2+3.A.Validação de critérios de preenchimento de cada campo required do input para habilitação do botão de calcular para 
a sequência de cálculo do imc*/
const validacao = document.querySelector("form");
while ((validacao.firstChild = null || "")) {
  return;
  break;
}

//algo
function calculatorImc() {
  //2+3.B.Retorno do valor de cada campo criado da lista de formulário//
  var formulario = document.querySelector("#form");
  var genero = document.querySelector("#genre").value;
  var idade = document.querySelector("#age").value;
  const peso = document.querySelector("#weight").value;
  const altura = document.querySelector("#height").value;
  var termoDeAceite = document.querySelector("#validatorCheckbox").checked;
  console.log(formulario);
  console.log(genero);
  console.log(idade);
  console.log(peso);
  console.log(altura);
  console.log(termoDeAceite);
  //2+3.C.Cálculo//A partir daqui -> Necessario para funcionar
  const imc = (peso / Math.pow(altura, 2)).toFixed(2);
  console.log(imc);
  /*2+3.D.Submiter o envio do resultado do cálculo para identificação de enquadramento dentro imc sem resetar os dados 
  preenchidos*/
  document.getElementById("form").onsubmit = function () {
    return false;
  };
  //3.Imc - Result and description//
  var resultadoImc = (document.getElementById("resultImc").innerHTML = imc);
  var descricaoImc = (document.getElementById("descriptionResult").innerHTML =
    validarImc(imc));
}
//Critérios de enquadramento do IMC//
const validarImc = (imc) => {
  let resultado;
  if (imc <= 16) {
    resultado = "Abaixo do peso ⚠️";
    resultTag.style.backgroundColor = "#F0A500";
  } else if (imc >= 16 && imc <= 40) {
    resultado = "Peso normal ✅";
    resultTag.style.backgroundColor = "#1E5128";
  } else {
    resultado = "Acima do peso ❗❗ ";
    resultTag.style.backgroundColor = "#950101";
  }
  return resultado;
};
//formula exibir so qdo calcular habilitado
/*
//apagar//
function clear() {
  document.getElementById("clearInformations").console.clear();
}*/

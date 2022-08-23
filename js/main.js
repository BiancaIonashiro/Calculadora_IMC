function clicou() {
  document.getElementById("agradecimento").innerHTML =
    "<b>Obrigado por clicar</b>";
  //console.log(document.getElementById("agradecimento"));
  // alert ("Obrigada por clicar");
}

function redirecionar() {
  //window.open ("https://globalacademy.com/");
  window.location.href = "https://globalacademy.com/";
}

function trocar(elemento) {
  //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
  //alert("trocar texto");
  elemento.innerHTML = "Obrigado por passar o mouse";
}

function voltar(elemento) {
  //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
  elemento.innerHTML = "Passe o mouse";
}

function load() {
  alert("página carregada");
}

function funcaochange(elemento) {
  console.log(elemento.value)
}

/*
function soma(n1, n2) {
  return n1 + n2;
}
*/
/*
var validar = 0

function validaIdade(idade) {
  if (idade >= 18) {
    validar = true;
  } else {
    validar = false;
  }
  return validar;
}

var idade = prompt("Qual é a sua idade?");
validaIdade(idade)
console.log(validar);
*/

//alert (soma(5,10));
/*
var d = new Date();
alert(d.getMonth()+1);
*/

/*
var count;
for(count=0; count <=5; count ++){
alert(count);
};
*/

/*
var count = 0;
while (count <= 5){
    console.log(count);
    alert (count);
    count= count ++;
};
*/

/*
var idade = prompt ("Qual a sua idade?");
if (idade >= 18) {
  alert("maior de idade");
} else {
  alert("menor de idade");
}
*/

/*
var frutas = [{nome:"maçã", cor:"vermelha"} , {nome:"uva", cor:"roxa"}]
console.log (frutas);
alert (frutas[1].nome);
*/
/*
var fruta = {nome:"maçã", cor:"vermelha"}
console.log (fruta.nome);
alert (fruta.cor);
*/

//var lista = ["maçã", "pêra", "caju"];
//lista.push("uva");
//list.pop();

//console.log(lista);
//console.log(lista.toString());
//console.log(lista.join(" - "));

//var nome = "Bianca Ionashiro";
//var idade = 29;
//var idade2 = 10;
//var frase = "Japão é o melhor time do mundo";
//alert (nome + " tem " + idade + " anos ");
//alert (idade + idade2);
//console.log(nome);
//console.log(idade + idade2);
//console.log(frase.toLowerCase());
//alert (frase.replace("Japão", "Brasil"));

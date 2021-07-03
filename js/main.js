/*Trabalhando com alert

alert("meu primeiro js")

Trabalhando com váriaveis*/

//Colocar aspa dupla na váriavel transforma ela em string.

//var nome = "Alex Juneo";
//var idade = 20; 
//var idade2 = 10; 
//var n1 = 5;
//var n2 = 3;
//var frase = "Japão é o melhor time do mundo";
//alert(nome + " tem " + idade + " anos");
//alert(idade + idade2);

//console.log(nome);
//console.log(idade + idade2);
//console.log(n1 * n2);
//console.log(frase.replace("Japão", "Brasil"));
//console.log(frase.toUpperCase());
//console.log(frase.toLowerCase());
//alert(frase.replace("Japão", "Brasil"));

//ARRAY

//Só usa (), quando se trata de uma função. length não é uma função.

// .push("") para adicionar item da lista.
// .pop("") para remover item da lista.
// .length para ver o tamanho da lista 
// .reverse() para imprimir a lista ao contrário.
// .toString() transforma a lista em string.
// .join("") altera a virgula da lista por outro caracter ou nada ou simplesmente um espaço


//var lista = ["maça", "pera", "laranja"];
//console.log(lista[0]);
//console.log(lista.toString()[0]);
//console.log(lista.join(" - "));

//lista.push("uva");
//lista.pop();
//console.log(lista);
//console.log(lista[2]);
//alert(lista[2]);


//DICTIONARY

/*
var fruta = {nome: "maça", cor: "vermelha"};
console.log(fruta.nome);
alert(fruta.cor);
*/

//LISTA DICTIONARY

/*var frutas = [{nome: "maça", cor: "vermelha"}, {nome: "uva", cor: "roxa"}];
console.log(frutas);
alert(frutas[1].nome);
*/

// CONDICIONAIS, LAÇOS DE REPETIÇÃO E DATE

// .prompt("") é utilizado pra receber uma resposta do usuário. Aparece uma caixa para o usuário digitar.

/*var idade = prompt("Qual a sua idade?");
//var idade = 18;
if(idade >= 18){
    alert("maior de idade");
}else{
    alert("menor de idade");
}
*/

//ESTRUTURA WHILE

/* var count = 0;
while (count < 5){
    console.log(count);
    alert(count);
    count++;
}
*/

//ESTRUTURA FOR

/*var count;
for (count = 0; count <=5; count++){
    alert(count);
}
*/

//DATE

// .getMonth()+1 retorna o mês em que estamos em número.
// .getMinutes retorna o minuto.
// .getDay() retorna o dia.
// .getHour() retorna a hora.

/*var d = new Date();
alert(d.getMonth()+1);
alert(d.getMinutes());
*/


//FUNCTION


/*function soma(n1, n2){
    return n1 + n2;
}

function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}

alert(soma(5,10));
alert(setReplace("Vai Japão", "Japão", "Brasil"));*/

/*var idade = prompt("Qual a sua idade?");

function validaIdade(idade){
    var validar = true;
    if (idade >= 18){
        validar = true;
    }
    else{
        validar = false;
    }
    return validar;
}

console.log(validaIdade(idade));*/

function clicou(){
    //alert("Obrigado por clicar");
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    //console.log(document.getElementById("agradecimento"));
}

function redirecionar(){
    window.open("https://linkedin.com/in/alexojuneo"); //abre o link em outr aba
    window.location.href = "https://linkedin.com/in/alexojuneo"; //abre o link na mesma janela
}

function trocar(elemento){
    //alert("trocar texto");
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse";
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "passe o mouse aqui";
    elemento.innerHTML = "passe o mouse aqui";
}

function load(){
    alert("Página carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}
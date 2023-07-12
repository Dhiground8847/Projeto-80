var nomePessoas = [];

function enviarNomes(){
    var nomeConvidado = document.getElementById("nomes").value;
    nomePessoas.push(nomeConvidado);
    document.getElementById("mostrarNomes").innerHTML=nomePessoas.toString();
}

function emOrdemAlfabetica(){
    nomePessoas.sort();
    var i = nomePessoas.join("<br>");
    document.getElementById("ordemAlfabetica").innerHTML=i.toString();
}

function nomesLista(){  
    var i = nomePessoas.join("<br>");
    document.getElementById("nomesEmLista").innerHTML=i.toString();
}

function pesquisarNome(){
var s = document.getElementById("pesquisarNome").value;
var encontrado = 0;
var contador ;
for(contador = 0; contador < nomePessoas.length; contador++){
    if(s==nomePessoas[contador]){
encontrado = encontrado + 1;
    }
}
document.getElementById("nomesLocalizados").innerHTML="nome encontrado " + encontrado + "vez(es) ";
}
function teste(ok1, ok2) {
    var retorno = ok1 + ok2;
    document.getElementById("resultado").innerHTML = retorno;
}

function fibonacci(n) {
  if (n === 0) {
    return 0;

  } else if (n === 1) {
    return 1;

  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

//inicio do reste sobre DOM e árvore DOM

var carro = { 
  nome: "fox", 
  marca: "renaut", 
  cor: "verde", 
}
 
carro.nome = carro.nome.replace("fox","kwid")


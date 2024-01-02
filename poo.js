//Arquivo destinado a orientação a objetos em javaScript


class Armazem {

    prateleira = []
    nome
    quantItens

    constructor(){
        this.prateleira.push("Produto A")
        this.prateleira.push("Produto C")
        this.prateleira.push("Produto B")

        this.nome = "Armazem do caio"

        this.quantItens = this.prateleira.length;
    }

    adicionaItem(item){
        this.prateleira.push(item)
    }

    mostraItens(){
        //essa função retorna um console log para cada elemento do array
       
        this.prateleira.forEach((item, contador) => {
            if(item !== undefined){
                console.log(`${item}. ${contador}`)
            }    
          });
    }
    
}


class Mercado {
    armazem;
    funcionarios = [];

    constructor() {
        this.armazem = new Armazem()
        this.funcionarios.push("Pedro")
        this.funcionarios.push("Marco")
        this.funcionarios.push("Luca")

    }

    adicionaItem(item) {
        this.armazem.adicionaItem(item)

    }

    mostraEstoque() {
        this.armazem.mostraItens()

    }
}

var superLuna = new Mercado()

superLuna.adicionaItem("Peito de Peru")

console.log(superLuna.mostraEstoque());
const printDeducao = (imposto) => {
    const deducao = "À dedução físcal é de "
    console.log(deducao + imposto);
}

const printValorDeduzido = (valor) => {
    const valorDeduzido = "você deve deduzir o valor de R$ "
    console.log(valorDeduzido + valor + " reais");
}

const printResultado = (imposto, salario, porcentagem) => {
    const deducao = salario * porcentagem
    printDeducao(imposto);
    printValorDeduzido(deducao)
    console.log("O que você vai ganhar no fim do mês é R$ " + (salario - deducao))
}

const tabelair = (salario) => {
    if (salario < 1903.98) {
        console.log("não há dedução fiscal");

    } else if (salario < 2826.65) { //O JS usa dois "e comerciais" && para representar o operador lógico op = permitem comparar variáveis e fazer algo com base no resultado dessa comparação
        printResultado("7.5%", salario, 0.075)
      

    } else if (salario < 3751.05) {
        printResultado("15%", salario, 0.150)

    } else if (salario < 4664.68) {
        printResultado("22.5%", salario, 0.225)

    } else {
        printResultado("27.5%", salario, 0.275)
    }
}


tabelair(100000)

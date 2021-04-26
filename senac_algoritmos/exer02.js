// dev in vscode;

const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// var numA = parseInt
// var numB = parseInt

rl.question('\nDigite o número A: ', function(numA) {
    rl.question('Digite o número B: ', function(numB) {
        var subC = numA - numB
        var mulC = numA * numB
        var divC = numA / numB
        var dobC = 2 * (numA + numB)/*
        console.log(`\nResult. subtração: ${subC}`)
        console.log(`Result. multiplicação: ${mulC}`)
        console.log(`Result. divisão: ${divC}`)
        console.log(`Result. dobro da soma: ${dobC}\n`)*/
        console.log(`\nResult. subtração: ` + subC)
        console.log(`Result. multiplicação: `+ mulC)
        console.log(`Result. divisão: ` + divC)
        console.log(`Result. dobro da soma: ` + dobC)
        rl.close()
    })
})
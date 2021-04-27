// dev in vscode;

/*
var a = prompt('Digite o número A')
var b = prompt('Digite o número A')

var numA = parseInt(a)
var numB = parseInt(b)

var c = numA + numB

console.log('Soma: ' + c)
*/

const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

var numA = parseInt
var numB = parseInt

rl.question('\nDigite o número A: ', function(numA) {
    rl.question('Digite o número B: ', function(numB) {
        var c = numA / numB
        console.log(`Resultado: ${c}\n`)
        rl.close()
    })
})
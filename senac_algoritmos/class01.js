/*
alert('hello word by senac')
*/
//  o comando acima esta casusando os seguintes erros:
//      . Object.<anonymous>
//      . Module._compile
//      . Object.Module._extensions..js
//      . Module.load
//      . Function.Module._load
//      . Function.executeUserEntryPoint
//      . internal/main/run_main_module.js

// ------------------------------------
//  esse não apresenta erros!
// 
console.log('hello word by senac\n');

// ------------------------------------
// ERROR: o node.js não reconhece o comando "prompt"
// 
// var nome = prompt('Digite seu nome: ');
// console.log('Nome digitado: ' + nome);
// 
// Para aquisicao de input:
// -> precisa chamar o modulo nativo do node.js "readline";
// -> criar a interface de input e output;
// 
// Criar a string de interacao, salvar variaveis e dar um print;
// Nao esquecer de fechar o console;
/*
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('What is your name? ', function(name) {
    rl.question('Where do you live? ', function(country) {
        console.log(`${name}, is a citzen of ${country}!`);
        rl.close();
    });
});

rl.on("close", function() {
    console.log("---\nBYE BYE !!!");
    process.exit(0);
});
*/

const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('Qual o seu nome? ', function(nome) {
    rl.question('Qual o seu sobrenome? ', function(sobre) {
        console.log(`Seu nome é ${nome} ${sobre}.`)
        rl.close()
    })
})


// --- does not work;
/*
const prompt = require('prompt')
prompt.start();
var nome = prompt('Digite seu nome: ');
console.log('Seu nome e: ' + nome);
*/
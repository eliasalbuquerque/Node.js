// dev in vscode;


const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('Digite o nome do remetente? ', function(remetente) {
    rl.question('Digite o nome do destinatário? ', function(destinatario) {
        rl.question('Digite a mensagem a ser enviada: ', function(mensagem) {
            console.log(`\n\nRemetente: ${remetente}`)
            console.log(`Destinatário: ${destinatario}`)
            console.log(`\nMensagem: ${mensagem}`)
            rl.close();
        })
    })
})
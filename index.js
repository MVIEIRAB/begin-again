// invocando o metodo Objeto Calculadora contendo os metodos pra cada operação matemática.
const calculadora = require('./calculadora/index')

// Invocando pacote para usar o Prompt.
const prompt = require('prompt-sync')()

// Modulo para dar escolha ao usuario de qual operação ele quer fazer
const readline = require('readline')

// Aviso para o Usuário que a calculadora iniciou!
console.log('Calculadora Iniciada, se divirta!')

// CRIA INTERFACE DE COMUNICAÇÃO DE ENTRADA E SAIDA DAS INFORMAÇÕES
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// OQUE APARECERA PRO CLIENTE ESCOLHER PARA DETERMINDADA AÇÃO
setTimeout(() => {
    rl.question('Qual operação matemática você deseja fazer? opções: "soma, subtrair, divisao e multiplicacao": ', resposta => {
        const num1 = parseInt(prompt('Digite o Primeiro numero: '))
        const num2 = parseInt(prompt('Digite o Segundo numero: '))

        if (resposta === 'soma') {
            calculadora.somarNum(num1, num2)
        }

        if (resposta === 'subtrair') {
            calculadora.subtrairNums(num1, num2)
        }

        if (resposta === 'divisao') {
            calculadora.dividirNums(num1, num2)
        }

        if (resposta === 'multiplicacao') {
            calculadora.multiplicarNums(num1, num2)
        }


        rl.close()
    })
}, 1000)
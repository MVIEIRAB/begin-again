// invocando o metodo Objeto Calculadora contendo os metodos pra cada operação matemática.
const calculadora = require('./calculadora/index')

// Invocando pacote para usar o Prompt.
const prompt = require('prompt-sync')()


console.log('Calculadora Iniciada, se divirtá!')

setTimeout(() => {
    // capturando os numeros digitados e atribuindo em uma variável
    const num1 = parseInt(prompt('Digite o Primeiro numero: '))
    const num2 = parseInt(prompt('Digite o Segundo numero: '))

    // chamando por operação e executando baseado no que o usuario digitou!
    console.log('A soma do numero 1 e numero 2 resulta em: ', calculadora.somarNum(num1, num2))
    console.log('A divisão do numero 1 e numero 2 resulta em: ', calculadora.dividirNums(num1, num2))
    console.log('A subtração do numero 1 e numero 2 resulta em: ', calculadora.subtrairNums(num1, num2))
    console.log('A multiplicação do numero 1 e numero 2 resulta em: ', calculadora.multiplicarNums(num1, num2))
}, 1000);
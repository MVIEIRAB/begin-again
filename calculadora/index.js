// FUNÇÕES PARA CADA OPERAÇÃO MATEMÁTICA
const calculadora = {
    somarNum: function (a, b) {
        console.log('Resultado da SOMA É', a + b)
    },
    subtrairNums: function (a, b) {
        console.log('Resultado da SUBTRAÇÃO É', a - b)
    },
    dividirNums: function (a, b) {
        console.log('Resultado da DIVISÂO É', a / b)
    },
    multiplicarNums: function (a, b) {
        console.log('Resultado da MULTIPLICAÇÃO É', a * b)
    }
}

// Exportando objeto contendo os metodos para cada operação matemática.
module.exports = calculadora
// retorna o valor da soma entre os dois parâmetros
function sum(v1, v2) {
    return v1 + v2; // Implementação da soma
}

// retorna o valor da subtração entre os dois parâmetros
function sub(v1, v2) {
    return v1 - v2;
}

// retorna o valor da divisão entre os dois parâmetros
function div(v1, v2) {
    if (v2 === 0) {
        return 'Erro: Divisão por zero'; // Tratamento para divisão por zero
    }
    return v1 / v2; // Implementação da divisão
}

// retorna o valor da multiplicação entre os dois parâmetros
function mult(v1, v2) {}

// retorna o valor da raiz quadrada do valor recebido por parâmetro
function square(v1) {}

// Função de resto (módulo) vazia
function mod(v1, v2) {}

// Exemplos de uso
console.log(sum(5, 3)); // Exemplo de uso da função de soma
console.log(sub(5, 3)); // Exemplo de uso da função de subtração
console.log(div(6, 2)); // Exemplo de uso da função de divisão
// Função para calcular o IMC e exibir o resultado
function calcularIMC() {
    // Isso vai capturar os valores inseridos pelo usuário
    // Utilizarei o parseFloat (converte string em número decimal)
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);

    // isso irá verificar se os valores são válidos
    // Utilizarei o isNaN para validação se o valor não é um número
    if (isNaN(peso) || isNaN(altura) || altura <= 0) {
        document.getElementById('resultado').innerText = 'Por favor, insira valores válidos para peso e altura.';
        return;
    }

    // Calcula o IMC
    const imc = peso / (altura * altura);

    // Determinando a classificação do IMC (Índice de Massa Corporal)
    let classificacao
    if (imc < 18.5) {
        classificacao = 'abaixo do peso';
    } elseif (imc >= 18.5 && imc < 24.9) {
        classificacao = 'com peso normal';
    } elseif (imc >= 25 && imc < 29.9) {
        classificacao = 'com sobrepeso';
    } else {
        classificacao = 'obeso';
    }

    // Exibindo o resultado do IMC e a classificação
    document.getElementById('resultado').innerText = `Seu IMC é ${imc.toFixed(2)}, o que indica que você está ${classificacao}.`
}
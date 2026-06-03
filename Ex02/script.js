//2) Faça um programa que leia um vetor com 8 números reais e calcule a média dos valores armazenados. Após isso, exiba os valores do vetor que estão acima da média. 
// Inicializa o vetor (array) vazio
let numeros = [];           
let soma = 0;

// Loop para ler os 8 números reais
for (let i = 0; i < 8; i++) {
    let numero = parseFloat(prompt(`Digite o número real ${i + 1}:`));
    numeros.push(numero);
    soma += numero; // Acumula a soma dos números
}   
// Calcula a média
let media = soma / numeros.length;
// Filtra os números que estão acima da média
let acimaDaMedia = numeros.filter(num => num > media);
// Exibe os números acima da média
if (acimaDaMedia.length > 0) {
    alert(`Números acima da média (${media.toFixed(2)}):\n\n${acimaDaMedia.join('\n')}`);
} else {
    alert(`Nenhum número está acima da média (${media.toFixed(2)}).`);
}
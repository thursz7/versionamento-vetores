/* 4) Leia dois vetores de 5 elementos cada (valores inteiros). Crie um terceiro vetor que contenha apenas os elementos que estão em ambos os vetores (interseção, sem repetição). 
Exemplo: 
Vetor 1 → [1, 2, 3, 4, 5] 
Vetor 2 → [3, 4, 5, 6, 7] 
Resultado → [3, 4, 5]  */
// Inicializa os vetores (arrays) vazios
let vetor1 = [];
let vetor2 = [];
// Loop para ler os 5 elementos do primeiro vetor
for (let i = 0; i < 5; i++) {
    let numero = parseInt(prompt(`Digite o número inteiro ${i + 1} do primeiro vetor:`));
    vetor1.push(numero);
}
// Loop para ler os 5 elementos do segundo vetor
for (let i = 0; i < 5; i++) {
    let numero = parseInt(prompt(`Digite o número inteiro ${i + 1} do segundo vetor:`));
    vetor2.push(numero);
}
// Cria o terceiro vetor com a interseção dos dois vetores, sem repetição
let intersecao = vetor1.filter(num => vetor2.includes(num));
// Remove duplicatas do vetor de interseção
let intersecaoUnica = [...new Set(intersecao)];
// Exibe o resultado
if (intersecaoUnica.length > 0) {
    alert(`Elementos em ambos os vetores (interseção):\n\n${intersecaoUnica.join('\n')}`);
} else {
    alert("Não há elementos em comum entre os dois vetores.");
};
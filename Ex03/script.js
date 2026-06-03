//3) Crie um programa que leia o nome e a idade de 9 pessoas e guarde esses valores em dois vetores, em posições relacionadas. No final, mostre uma listagem contendo apenas os dados das pessoas menores de idade (nome e idade). 
// Inicializa os vetores (arrays) vazios
let nomes = [];
let idades = [];
// Loop para ler os 9 nomes e idades
for (let i = 0; i < 9; i++) {
    let nome = prompt(`Digite o nome da pessoa ${i + 1}:`);
    let idade = parseInt(prompt(`Digite a idade de ${nome}:`));
    nomes.push(nome);
    idades.push(idade);
}
// Filtra os dados das pessoas menores de idade
let menoresDeIdade = nomes
    .map((nome, index) => ({ nome, idade: idades[index] })) // Combina nome e idade em um objeto
    .filter(pessoa => pessoa.idade < 18);
// Exibe os dados das pessoas menores de idade
if (menoresDeIdade.length > 0) {
    let resultado = menoresDeIdade.map(pessoa => `${pessoa.nome} - ${pessoa.idade} anos`).join('\n');
    alert(`Pessoas menores de idade:\n\n${resultado}`);
} else {
    alert("Nenhuma pessoa é menor de idade.");
}


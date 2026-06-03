// Inicializa o vetor (array) vazio
let nomes = [];

// Loop para ler os 7 nomes
for (let i = 0; i < 7; i++) {
    let nome = prompt(`Digite o nome ${i + 1}:`);
    nomes.push(nome);
}

// Inverte a cópia do vetor e junta todos os nomes com uma quebra de linha (\n)
let listaInversa = [...nomes].reverse().join('\n');

// Mostra tudo de uma vez só no console
alert("--- Listagem dos nomes na ordem inversa ---");
alert(listaInversa);

// Se quiser mostrar em uma caixinha de alerta na tela:
// alert("Nomes na ordem inversa:\n\n" + listaInversa);
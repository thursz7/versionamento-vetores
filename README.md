# Atividade: Manipulação de Vetores em JavaScript 🚀

Este repositório contém a resolução de uma lista de exercícios focada na manipulação de estruturas de dados do tipo Vetor (Arrays) utilizando a linguagem **JavaScript**. 

O principal objetivo desta atividade é exercitar a lógica de programação tradicional, aplicando estruturas de repetição (`for`, `while`) e condicionais (`if`, `else`) para manipulação de coleções, simulando o comportamento de linguagens de mais baixo nível.

---

## 🚫 Restrições do Projeto

Para fins de aprendizado de lógica e algoritmos, todos os exercícios foram desenvolvidos **sem a utilização de métodos nativos do JavaScript para Arrays**, tais como:
* `push()`, `pop()`, `shift()`, `unshift()`
* `reverse()`
* `join()`
* `includes()`, `indexOf()`
* `map()`, `filter()`, `reduce()`, etc.

Toda a inserção, leitura, inversão e busca de elementos foram feitas manualmente utilizando índices e loops.

---

## 📋 Tarefas Desenvolvidas

### 1️⃣ Inversão de Nomes (`exercicio1.js`)
* **Descrição:** Lê 7 nomes de pessoas, armazena-os em um vetor e, no final, exibe uma listagem única com todos os nomes informados na ordem inversa da digitação.
* **Conceito aplicado:** Loops decrescentes para leitura inversa de índices.

### 2️⃣ Média e Valores Acima da Média (`exercicio2.js`)
* **Descrição:** Lê um vetor com 8 números reais, calcula a média aritmética desses valores e, em seguida, exibe apenas os números do vetor que ficaram acima dessa média calculada.
* **Conceito aplicado:** Acumuladores, cálculo de média e filtragem manual.

### 3️⃣ Filtro de Menores de Idade (`exercicio3.js`)
* **Descrição:** Lê o nome e a idade de 9 pessoas, guardando os dados em dois vetores diferentes de forma indexada (posições relacionadas). Ao final, exibe uma listagem contendo apenas o nome e a idade das pessoas que são menores de idade.
* **Conceito aplicado:** Vetores paralelos/relacionados.

### 4️⃣ Interseção de Vetores (`exercicio4.js`)
* **Descrição:** Lê dois vetores de 5 elementos inteiros cada. Cria um terceiro vetor que armazena apenas os elementos comuns a ambos (interseção), garantindo que não haja números duplicados no resultado final.
* **Exemplo:**
  * Vetor 1 → `[1, 2, 3, 4, 5]`
  * Vetor 2 → `[3, 4, 5, 6, 7]`
  * Resultado → `[3, 4, 5]`
* **Conceito aplicado:** Busca e verificação manual de duplicidade (algoritmo de busca linear).

---

## 🛠️ Como Executar os Códigos

Você pode executar estes arquivos utilizando o **Node.js** no seu terminal ou colando os códigos no console do navegador.

### Pré-requisitos
* Ter o [Node.js](https://nodejs.org/) instalado em sua máquina.
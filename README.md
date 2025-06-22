# Menu de Funções em JavaScript

Este programa em JavaScript apresenta um menu interativo no terminal que permite executar diversas funções comuns de lógica de programação, manipulação de dados e algoritmos. Ideal para estudos, prática de fundamentos e reforço em estruturas básicas como condicionais, laços e funções.

##  Funcionalidades

-  Validar datas com verificação de ano bissexto
-  Jogo da adivinhação de número aleatório
-  Identificar palavras únicas em uma frase
-  Calcular fatorial (recursivo)
-  Simulação de debounce
-  Fatorial com memoização (otimizado com cache)
-  Ordenar produtos por preço (crescente)
-  Agrupar vendas por cliente
-  Converter array de pares para objeto
-  Converter objeto para array de pares

## Requisitos

- Node.js instalado  
   [Baixar Node.js](https://nodejs.org/)

## Como executar

1. **Clone ou baixe este repositório**
2. No terminal, navegue até a pasta onde está o arquivo:
   ```bash
   cd caminho/para/seu/projeto
   ```
3. Instale o pacote `prompt-sync`:
   ```bash
   npm install prompt-sync
   ```
4. Execute o programa:
   ```bash
   node seuArquivo.js
   ```

> Substitua `seuArquivo.js` pelo nome real do seu arquivo (ex: `atividade2.js`).

## Observações

- A validação de data considera regras de anos bissextos e aceita datas até 2025.
- O jogo da adivinhação escolhe um número aleatório entre 1 e 100.
- O teste de debounce é simbólico e serve apenas como demonstração de lógica, pois o terminal não simula eventos de tempo como em ambientes web.
- A memoização armazena resultados anteriores de cálculos para otimizar desempenho.

## Exemplo de uso

Após iniciar o programa, será exibido o seguinte menu:

```
===== MENU DE OPÇÕES =====
1 - Validar Data
2 - Jogo da Adivinhação
3 - Palavras Únicas
4 - Fatorial Recursivo
5 - Testar Debounce (demonstração simples)
6 - Memoização (fatorial memoizado)
7 - Nomes Ordenados por Preço
8 - Agrupar Vendas por Cliente
9 - Converter Pares para Objeto
10 - Converter Objeto para Pares
0 - Sair
```

Escolha a opção desejada e siga as instruções no terminal.



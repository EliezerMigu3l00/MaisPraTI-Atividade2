const prompt = require('prompt-sync')();

function ehAnoBissexto(ano) {
    return (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0);
}

function ehDataValida(dia, mes, ano) {
    const nomesMeses = [
        "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
        "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
    ];

    const diasPorMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (mes === 2 && ehAnoBissexto(ano)) {
        diasPorMes[1] = 29;
    }

    if (ano <= 2025 && mes >= 1 && mes <= 12 && dia >= 1 && dia <= diasPorMes[mes - 1]) {
        const nomeMes = nomesMeses[mes - 1];
        let mensagem = `A data é válida: ${dia} de ${nomeMes} de ${ano}`;
        if (mes === 2 && dia === 29) {
            return mensagem += " e corresponde a um ano bissexto.";
        }
        return mensagem;
    } else {
        return console.log("A data inserida não corresponde a uma data verdadeira.");
    }
}

function gerarNumeroAleatorio(){
    return Math.floor(Math.random() * 100) + 1;
}

function adivinhacao(tentativa, numeroAleatorio){

    if(numeroAleatorio === tentativa){
        console.log("Parabens, voce advinhou o numero!");
        return true;
    }else if(tentativa < numeroAleatorio){
        console.log("Faca uma tentativa mais alta!")
    }else if(tentativa > numeroAleatorio){
        console.log("Faca uma tentativa mais baixa!")
    }
}

function palavrasUnicas(str) {
    
    const palavras = str.toLowerCase().match(/[a-zà-ú0-9]+/gi); 
    const contagem = {};

    if (palavras) {
        for (let i = 0; i < palavras.length; i++) {
            let palavra = palavras[i];
            if (contagem[palavra]) {
                contagem[palavra]++;
            } else {
                contagem[palavra] = 1;
            }
        }
    }

    const unicas = [];
    for (let palavra in contagem) {
        if (contagem[palavra] === 1) {
            unicas.push(palavra);
        }
    }

    return unicas;
}

function fatorial(n) {
    if (n < 0) {
        throw new Error("Fatorial não definido para números negativos.");
    } else if (n === 0) {
        return 1;
    } else {
        return n * fatorial(n - 1);
    }
}

function debounce(fn, delay) {
    let timeoutId;

    return function(...args) {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }

        timeoutId = setTimeout(() => {
            fn.apply(this, args);
        }, delay);
    };
}

function memoize(fn) {
    const cache = {};

    return function(...args) {
        const key = JSON.stringify(args); // chave única baseada nos argumentos

        if (cache.hasOwnProperty(key)) {
            console.log("Retornando do cache:", key);
            return cache[key];
        } else {
            const resultado = fn.apply(this, args);
            cache[key] = resultado;
            console.log("Calculando e armazenando:", key);
            return resultado;
        }
    };
}

function nomesOrdenadosPorPreco(produtos) {
    return produtos
        .slice() 
        .sort((a, b) => a.preco - b.preco) 
        .map(produto => produto.nome); 
}


function agruparPorCliente(vendas) {
    return vendas.reduce((acumulador, venda) => {
        const { cliente, total } = venda;

        if (acumulador[cliente]) {
            acumulador[cliente] += total;
        } else {
            acumulador[cliente] = total;
        }

        return acumulador;
    }, {});
}

function paresParaObjeto(pares) {
    const objeto = {};

    for (let i = 0; i < pares.length; i++) {
        const [chave, valor] = pares[i];
        objeto[chave] = valor;
    }

    return objeto;
}

function objetoParaPares(obj) {
    const pares = [];

    for (let chave in obj) {
        if (obj.hasOwnProperty(chave)) {
            pares.push([chave, obj[chave]]);
        }
    }

    return pares;
}


let opcao;

do {
    console.log("\n===== MENU DE OPÇÕES =====");
    console.log("1 - Validar Data");
    console.log("2 - Jogo da Adivinhação");
    console.log("3 - Palavras Únicas");
    console.log("4 - Fatorial Recursivo");
    console.log("5 - Testar Debounce (demonstração simples)");
    console.log("6 - Memoização (fatorial memoizado)");
    console.log("7 - Nomes Ordenados por Preço");
    console.log("8 - Agrupar Vendas por Cliente");
    console.log("9 - Converter Pares para Objeto");
    console.log("10 - Converter Objeto para Pares");
    console.log("0 - Sair");

    opcao = Number(prompt("Escolha uma opção: "));

    switch (opcao) {
        case 1: {
            const dia = Number(prompt("Informe o dia: "));
            const mes = Number(prompt("Informe o mês (1-12): "));
            const ano = Number(prompt("Informe o ano: "));
            const valido = ehDataValida(dia, mes, ano);
            console.log(valido ? "Data válida." : "Data inválida.");
            break;
        }
        case 2: {
            const numeroAleatorio = gerarNumeroAleatorio();
            let acertou = false;
            let tentativas = 0;
            console.log("Tente adivinhar o número entre 1 e 100.");
            while (!acertou) {
                let tentativa = Number(prompt("Digite seu palpite: "));
                tentativas++;
                acertou = adivinhacao(tentativa, numeroAleatorio);
            }
            console.log(`Você acertou em ${tentativas} tentativas.`);
            break;
        }
        case 3: {
            const texto = prompt("Digite uma frase: ");
            const unicas = palavrasUnicas(texto);
            console.log("Palavras únicas:", unicas);
            break;
        }
        case 4: {
            try {
                const n = Number(prompt("Informe um número para calcular o fatorial: "));
                const res = fatorial(n);
                console.log(`Fatorial de ${n} é ${res}`);
            } catch (error) {
                console.log(error.message);
            }
            break;
        }
        case 5: {
            console.log("Testando debounce (função será executada após 1 segundo sem chamadas repetidas).");
            const fn = debounce(() => console.log("Função executada!"), 1000);
            console.log("Chamando função debounce 3 vezes rapidamente...");
            fn();
            fn();
            fn();
            setTimeout(() => {
                console.log("Fim do teste debounce.");
            }, 1500);
            break;
        }
        case 6: {
            const fatorialMemo = memoize(fatorial);
            const num = Number(prompt("Informe um número para fatorial memoizado: "));
            console.log(fatorialMemo(num));
            console.log(fatorialMemo(num)); // chamada do cache
            break;
        }
        case 7: {
            const produtos = [];
            let qtdProdutos = Number(prompt("Quantos produtos deseja informar? "));
            for(let i = 0; i < qtdProdutos; i++) {
                let nome = prompt(`Nome do produto ${i + 1}: `);
                let preco = Number(prompt(`Preço do produto ${i + 1}: `));
                produtos.push({ nome, preco });
            }
            const nomesOrdenados = nomesOrdenadosPorPreco(produtos);
            console.log("Nomes ordenados por preço:", nomesOrdenados);
            break;
        }
        case 8: {
            const vendas = [];
            let qtdVendas = Number(prompt("Quantas vendas deseja informar? "));
            for(let i = 0; i < qtdVendas; i++) {
                let cliente = prompt(`Nome do cliente ${i + 1}: `);
                let total = Number(prompt(`Total da venda ${i + 1}: `));
                vendas.push({ cliente, total });
            }
            const agrupado = agruparPorCliente(vendas);
            console.log("Vendas agrupadas por cliente:", agrupado);
            break;
        }
        case 9: {
            const pares = [];
            let qtdPares = Number(prompt("Quantos pares deseja informar? "));
            for(let i = 0; i < qtdPares; i++) {
                let chave = prompt(`Chave do par ${i + 1}: `);
                let valor = prompt(`Valor do par ${i + 1}: `);
                pares.push([chave, valor]);
            }
            const obj = paresParaObjeto(pares);
            console.log("Objeto criado:", obj);
            break;
        }
        case 10: {
            const obj = {};
            let qtdChaves = Number(prompt("Quantas propriedades deseja informar no objeto? "));
            for(let i = 0; i < qtdChaves; i++) {
                let chave = prompt(`Nome da chave ${i + 1}: `);
                let valor = prompt(`Valor da chave ${i + 1}: `);
                obj[chave] = valor;
            }
            const pares = objetoParaPares(obj);
            console.log("Array de pares:", pares);
            break;
        }
        case 0:
            console.log("Encerrando o programa...");
            break;
        default:
            console.log("Opção inválida! Tente novamente.");
    }
} while (opcao !== 0);
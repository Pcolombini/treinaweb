function tab(numero) {

    for (i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${i * numero}`);
    }

}

tab(2);

function contador(inicio, fim) {
    console.clear();

    var inicio;

    if (inicio < fim) {
        for (let index = inicio; index <= fim; index++) {
            console.log(index);
        }
    } else {
        for (let index = inicio; index >= fim; index--) {
            console.log(index);
        }
    }

}

contador(5, 2);

function numeroInt(numero) {
    console.clear();

    // if (numero > 0) {
    //     for (let i = numero; i >= 0; i--) {
    //     console.log(i);
    //     }
    // } else {
    //     console.log(numero);
    // }

    // RESPOSTA COM DO WHILE

    do {
        console.log(numero--);
    } while (numero >= 0)

}

numeroInt(-3);

function aster(numero) {
    console.clear();

    // for (let i = numero; i > 0; i--) {
    //     console.log('*');
    // }

    let linha = '';

    for (let i = 0; i < numero; i++) {
        linha += '*';
    }

    console.log(linha);
}

aster(5);

function tree(numero) {
    console.clear();

    let linha = '';

    for (let i = 0; i < numero; i++) {
        linha += "*";
        console.log(linha)
    }

}

tree(5);

function numeroP(numero) {
    console.clear();

    var soma = 0;

    for (let i = numero; i >= 1; i--) {
        soma += i;
    }

    console.log(soma);

}

numeroP(5);

function fatorial(numero) {

    console.clear();

    // let resultado = numero;
    // let mensagem = `${numero}! = ${numero}`;


    if (numero === 0 || numero === 1) { console.log(1); }

    // for (let i = numero - 1; i >= 1; i--) {
    //     resultado *= i;
    //     mensagem += ` ${i === numero ? i : 'x ' + i}`;
    // }

    // mensagem += ` = ${resultado}`;
    // console.log(mensagem);

    /* Na atividade o professor disse que estaria começando criando duas variáveis, uma para armazenar o tamplate string, e outra para armazenar o resultado a variavel de resultado inicia em 1 por que o fatorial de 0 é igual a 1*/

    let multiplicacao = ''; // ARMAZENA O TAMPLATE
    let total = 1; // ARMAZENA O RESULTADO

    // COMEÇA O LAÇO FOR
    for (let i = numero; i > 0; i--){

        if (i !== numero ) {
            multiplicacao += ` x ${i}`;
        } else {
            multiplicacao += numero;
        }

        total *= i;

    }

    console.log(`${numero}! = ${multiplicacao} = ${total}`);

}

fatorial(5);

function coLinhas(colunas, linhas) {
    console.clear();

    /* Neste desafio você vai receber uma variável "colunas" e outra variável "linhas". Você vai ter que imprimir asteriscos (*) de acordo com a quantidade de colunas e linhas. */

    for (let i = 0; i < linhas; i++) {
        let linha = '';
        
        for (let j = 0; j < colunas; j++) {
            linha += '*';
        }

        console.log(linha);       
    
    }
}

coLinhas(5,6);

function mQuadrada(tamanho) {
    console.clear();

    for (let row = 0; row < tamanho; row++) {
        let linha = '';
        for (let col = 0; col < tamanho; col++) {
            linha += row === col ? '1' : '0'; 
        }
        console.log(linha);
    }

}

mQuadrada(5);
let numeros = [];

/* PUSH -> adiciona um indice no array, na última posição */
numeros.push(1);
numeros.push('5');
numeros.push(3);

/* UNSHIFT -> adiciona um indice no array, na primeira posição*/
numeros.unshift(2)

numeros.pop(); // REMOVE O ÚLTIMO INDICE
numeros.shift(); // REMOVE O PRIMEIRO INDICE

/* SPLICE -> modifica os indices do meio do array*/

let preco = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

preco.splice(4, 2, '4', '5');
preco.splice(10, 0, 'Dez')

/* Acessando diretamento o indice */

preco[1];

// console.log(preco[preco.length - 1]);

let precos = [0, 1, 2, 3, 4, 5, 6];

/* 
let preco1 = precos[0];
let preco2 = precos[1];
let preco3 = precos[2]; 
*/

/* 
operador spread (...) ele é um "espalhador", distribui os valores de array por uma variável, essa variável, também é um array;
*/

let [preco1, preco2, ...preco3] = precos;

// console.log(preco1, preco2, preco3);


let novoArray = [...precos];

let soma = (...numeros) => {
    let total = 0;
    for (let i = 0; i < numeros.length; i++) {
        total += numeros[i];
    }
    return total;
}

console.log(soma(...novoArray));
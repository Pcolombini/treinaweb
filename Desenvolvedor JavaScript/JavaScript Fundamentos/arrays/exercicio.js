function invert(palavra) {

    // let [l1,l2,l3,l4,l5,l6,l7,l8,l9] = p;

    // console.log(l9+l8+l7+l6+l5+l4+l3+l2+l1);

    /* SOLUÇÃO DO EXERCICIO DO PROFESSOR */

    let p = palavra;

    let ultimoC = p.length - 1;

    var str = '';

    for (let i = ultimoC; i >= 0; i--) {
        str += p[i];
    }

    console.log(str);
}
let palavra = 'Treinaweb';
invert(palavra);

function dobro(num) {

    for (let i = 0; i < num.length; i++) {
        console.log(num[i] * 2);
    }

}
let num = [1, 5, 3];
dobro(num);

function minMax(minMaximo) {

    // let min;
    // let max;

    let min = minMaximo[0];
    let max = minMaximo[0];

    // for (let i = 0; i < minMaximo.length; i++) {
    //     // min = Math.min(...minMaximo);
    //     // max = Math.max(...minMaximo);
    // }

    for (let i = 1; i < minMaximo.length; i++) {
        if (minMaximo[i] < min) {
            min = minMaximo[i];
        }
        if (minMaximo[i] > max) {
            max = minMaximo[i];
        }
    }

    console.log('Menor: ', min);
    console.log('Maior: ', max);
}
let minMaximo = [5, 3, 2, 7, 8, 9, 4];
minMax(minMaximo)

function evenOdd(numb) {

    let str = '';

    for (let i = 0; i <= numb.length; i++) {

        if (numb[i] % 2 === 0) {
            str += numb[i];
        }

        if (numb[i] % 2 !== 0) {
            str += '*';
        }
    }

    // RESOLUÇÃO DO PROFESSOR
    // for (let i = 0; i < numb.length; i++) {
    //     str += numb[i] % 2 === 0 ? numb[i] : '*';
    // }

    console.log(str);

}
let numb = [1, 5, 3, 2, 7, 8, 9, 4];
evenOdd(numb);

function procurar(procurado, ...numer) {

    // for (let i = 0; i < numer.length; i++) {

    //     if (numer[i] === procurado) {
    //         numer.splice(1,1);
    //     }
    //     console.log(numer[i]);
    // }

    // RESOLUÇÃO DO PROFESSOR

    for (let i = 0; i < numer.length; i++) {

        if (numer[i] !== procurado) {

            /* A escolha do diferente é por que o número que for igual ao procurado será ignorado */

            console.log(numer[i]);
        }
    }

}
numer = [1, 5, 2];
procurado = 5;
procurar(procurado, ...numer);

function main(frase) {

    let str = '';

    for (let i = 0; i < frase.length; i++) {
        if (frase[i] !== 'a' && frase[i] !== 'e' && frase[i] !== 'i' && frase[i] !== 'o' && frase[i] !== 'u') {
            str += frase[i];
        }
    }
    console.log(str);

}
let frase = 'ola web developers';
main(frase);


// declarando uma função

function dobroF(numero) {
    return numero*2;
}

// declarando uma arrow function

let dobroArrowF = (numero) => {
    return numero*2;
}

// declarando uma arrow function simplificada

let dobroArrowFuncSimple = numero => numero * 2; // usando quando cabe em 1 linha

// console.log(dobroF(6));
// console.log(dobroArrowF(5));
// console.log(dobroArrowFuncSimple(9));

let primo = numero => {

    numero === 1 ? false : true;

    for (let i = 2; i < numero; i++) {

        if (numero % i === 0) {
            return false;
        } else {
            return true;
        }

    }

}





function arrowFunction(numero){
    return (numero) => {
        if (numero % 2 === 0) {
            return numero * 2
        } else {
            return numero * 3
        }
    }
}

function multiplicacao(numero1, numero2 = 5) {
    return numero1 * numero2;
}

function dobro(numero) {
    numero * 2
}

console.log(1 === 1 && 1 !== 1)
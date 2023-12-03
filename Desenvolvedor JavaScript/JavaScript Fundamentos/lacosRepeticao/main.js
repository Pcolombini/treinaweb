// function addHeader() {

//     titulo = document.createElement('h1');

//     addElemente = document.getElementById('header').appendChild(titulo);

//     titulo.appendChild(document.createTextNode('Laços de Repetição'));

// }

// addHeader();

//  INICIALIZAÇÃO ; EXPRESSÃO ; INCREMENTO
for (let i = 0    ;  i <= 20   ;  i++) {
    var a = 1000;
}

for (let i = 1; i <= 3; i++) {

    for (let j = 1; j <= 10; j++) {

        // console.log(`${i} x ${j} = ${i*j}`); 

    }

}

let i = 0;

/* while (i <= 10) {
    console.log(i);
    i++;
} */

let palavra = 'paralelepipedo';
let letra = 'e';
let total = 0;
let totalAProcurar = 2;
let indice = 0;

while (total < totalAProcurar && indice < palavra.length) {

    if (palavra[indice] === letra) {
        total++;
    }

    indice++;
}

if (total >= totalAProcurar) {
    // console.log("SIM");
} else {
    // console.log("NÃO");
}

let numeroEsclhido = Math.floor(Math.random() * 9 + 1),
    acertou = false,
    palpite = '3' ;
/* 
do {

    palpite;

    if (parseInt(palpite) === numeroEsclhido) {
        acertou = true;
    }

} while (palpite !== '' && parseInt(palpite) !== numeroEsclhido);

if (acertou) {
    console.log('Vitória');
} else {
    console.log('Não foi dessa vez');
} */

for(let i = 1; i <= 10; i++) {
    if (i === 5) {
    continue;
    }
    console.log(i);
}

for(let i = 1; i <= 10; i++) {

    if (i === 5) {
    break;
    }
    
    console.log(i);
}
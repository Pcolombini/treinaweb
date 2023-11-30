let a = 0;
let b = 1;

let r = console.log(a == b);



/**
 * COM OS TIPOS BOOLEANOS, PODEMOS FAZER O COMPUTADOR TOMAR DECISÕES
 */

function mostrar() {
    let paragraph = document.createElement("p");
    let text = document.createTextNode("false");
    paragraph.appendChild(text);
    document.body.appendChild(paragraph);
}

mostrar();
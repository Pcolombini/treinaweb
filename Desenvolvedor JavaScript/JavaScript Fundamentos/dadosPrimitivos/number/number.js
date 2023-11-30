let ano = 2023;
let altura = 1.8;

console.log(ano);
console.log(altura);

function mostrar() {
    let paragraph = document.createElement("p");
    let qL = document.createElement("br");
    let text = document.createTextNode(ano);
    let textD = document.createTextNode(altura);
    paragraph.appendChild(text);
    paragraph.appendChild(qL);
    paragraph.appendChild(textD);
    document.body.appendChild(paragraph);
}

mostrar();
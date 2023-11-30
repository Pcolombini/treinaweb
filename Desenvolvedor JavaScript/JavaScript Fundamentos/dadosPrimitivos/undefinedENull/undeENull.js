let idade;
console.log(idade);

idade = null;
console.log(idade);

function mostrar() {
    let paragraph = document.createElement("p");
    let qL = document.createElement("br");
    let text = document.createTextNode(`undefined 
    `);
    let textD = document.createTextNode(idade);
    paragraph.appendChild(text);
    paragraph.appendChild(qL);
    paragraph.appendChild(textD);
    document.body.appendChild(paragraph);
}

mostrar();
let nome = Symbol("Meu Nome");
console.log(nome);

function mostrar() {
    let paragraph = document.createElement("p");
    let text = document.createTextNode("Symbol(Meu Nome)");
    paragraph.appendChild(text);
    document.body.appendChild(paragraph);
}

mostrar();
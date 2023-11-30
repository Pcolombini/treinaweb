let sayHello = "Olá Mundo!";

console.log(sayHello);

function mostrar() {
    let paragraph = document.createElement("p");
    let text = document.createTextNode(sayHello);
    paragraph.appendChild(text);
    document.body.appendChild(paragraph);
}

mostrar();
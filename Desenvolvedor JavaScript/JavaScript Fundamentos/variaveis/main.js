// criando uma tag

let paragrafo = document.createElement("p");

let ul = document.createElement("ul");

let li = document.createElement("li");

// adicionando a tag no id

let content = document.getElementById("main").appendChild(paragrafo);

// adiciona conteúdo ao paragrafo

// content.innerText = 'Olá' + ' \n';

let hi = document.createTextNode("Olá Mundo");

let cor1 = document.createTextNode('Roxo');
let cor2 = document.createTextNode('Verde');
let cor3 = document.createTextNode('Lilas');

paragrafo.append(hi);
// li.append(cor1);

// adiciona uma tag ao paragrafo

// content.innerHTML= `<ul> <li>Olá</li> </ul>`;

paragrafo.appendChild(ul);
// ul.appendChild(li);


var idade;
var nome;

idade = 32;
nome = 'Paschoal';
let lastNome = ' Colombini';

idade += 1;
idade++;
idade -= 1;
idade--;

let titulo = document.createElement('h1');
let br = document.createElement('br');
let header = document.getElementById('header').appendChild(titulo);

titulo.style.textAlign = 'center';

// titulo.innerHTML = "<h1>Olá mundo</h1>";

titulo.appendChild(document.createTextNode('Olá mundo'));


let p = document.getElementById('main');

p.style.margin = '2rem';
p.style.fontSize = '1.2rem';

let text = `Nome completo: ${nome}  ${lastNome};`;
let text1 = `A idade de ${nome} é ${idade};`;

p.appendChild(document.createTextNode(text));
p.appendChild(br);
p.appendChild(document.createTextNode(text1));

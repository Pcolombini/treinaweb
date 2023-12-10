// Criando o objeto

const lapis = {
    // propriedade chave: valor
    cor: 'Preto',
    tamanho: 15,

    /* funções escrita de forma simples, funções podem ser escritas como nome: function () {} ou arrow nome: () => {} */

    escrever() {
        console.log('Escrevendo...');
    },

    apagar:function(){
        console.log('Apagando...');
    },

    rabiscar: () => {
        console.log('Rabiscando...');
    }
};

// Acessando os atributos e funções

lapis.cor;
lapis['cor'];

let corDoLapis = 'cor';

lapis[corDoLapis];

// Criando novos atributos

lapis.corDaBorracha = 'Rosa';
lapis['Ponta'] = 1.5;

// Removendo atributos

delete lapis.Ponta;

// Para saber o nome de todas as chaves que um objeto possue

console.log(Object.keys(lapis));

// Transformando objeto lápis em um JSON

console.log(JSON.stringify(lapis));

/* As funções não são passadas para o JSON, objetos como Data também não*/

// Convertendo a string em um JSON

console.log(JSON.parse('{"cor":"Preto","tamanho":15,"corDaBorracha":"Rosa"}'));

// O que é referência

let num1 = 15;
let num2 = num1;

console.log(num1 === num2); // true

num1 = 18;

console.log(num1 === num2); // false

// agora com objetos

let obj1 = {nome:"paschoal"};
let obj2 = obj1;

console.log(obj1 === obj2); // true

obj1.nome = 'maria';

console.log(obj1 === obj2); // true

/* Isso acontece pois objetos que recebem outros objetos recebem na verdade a referência do primeiro objeto, ou seja, ele copia o endereço da memória, eles apontam para o mesmo lugar na memória do computador, mesmo que criemos dois objetos com o mesmo conteúdo, se os compararmos, eles retornaram false, por que por mais que o conteúdo seja o mesmo, o que é comparado em relação aos objetos é o lugar da meória */

let obj3 = {idade:12};
let obj4 = {idade:12};

console.log(obj3 === obj4); // false

// Clonando um objeto

obj2 = JSON.parse(JSON.stringify(obj1));
obj2.nome = 'Paschoal';

console.log(obj1);
console.log(obj2);

// Extraindo propriedades dos objetos

let corL = lapis.cor,
    tamanhoL = lapis.tamanho;

let {cor, tamanho} = lapis

console.log(corL, cor, tamanhoL, tamanho);

// Recebendo no argumento da função a propriedade especifica do obj

minhaFunc = ({corDaBorracha, tamanho}) => {console.log(corDaBorracha,tamanho);}

minhaFunc(lapis);

// Operador spread ... 

outraFunc = () => {
    return {
        cor: "Preto",
        tamanhoDois: 15,
        usado: false
    }
}

let {tamanhoDois, ...outras} = outraFunc(); // spread vai pegar as propriedades e colocar nessa variável outras

console.log(tamanhoDois);


// Clone com spread

const lapis2 = {...lapis}

console.log(lapis === lapis2);

// Symbols - tipo primitivo do JS

let meuSymbol = Symbol('cpf');
let outroSybol = Symbol('cpf');

console.log(meuSymbol === outroSybol);

/* Podemos usar os Sybols para definir propriedades seguras, pois eles são acessíveis somente com o nome da variável, e não aparecem num object.keys() */

let usado = Symbol('usado');

const lapiseira = {
    cor: "Azul",
    ponta: 0.5,
    [usado]: false
}

console.log(Object.keys(lapiseira)); // usado que é um tipo Symbol não aparece


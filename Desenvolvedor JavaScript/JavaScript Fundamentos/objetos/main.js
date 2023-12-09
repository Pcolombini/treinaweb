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

let cor = 'cor';

lapis[cor];

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
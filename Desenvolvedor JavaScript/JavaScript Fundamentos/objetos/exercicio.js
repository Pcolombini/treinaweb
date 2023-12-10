function cao() {
    /*  
    Crie uma função chamada "criarObjeto" que retorna um objeto com:
    
    Propriedade "raca" com valor "Golden retriever";
    Propriedade "latir" que seja uma função que imprime "au au".
*/

    const criarObjeto = () => {
        return {
            raca: "Golden retriever",
            latir() { console.log("au au"); }
        }
    }

    const cachorro = criarObjeto();

    console.log(cachorro.raca);

    cachorro.latir();
}
cao();

function elevador() {
    /* 
    Neste desafio vamos simular um elevador.

    Crie um objeto em uma variável chamada "elevador". Esse objeto deve ter:

    Uma propriedade chamada "totalAndares" com o valor 3;

    Uma propriedade chamada "andarAtual" com o valor 0;

    Uma função chamada “subir”, que ao ser executada aumenta a variável “andarAtual”. Lembrando que não deve permitir subir além do total de andares existentes;

    Uma função chamada "descer", que ao ser executada diminui a variável "andaratual". Lembrando que não deve permitir descer abaixo de 0;

    As funções "subir" e "descer" também devem imprimir o número do novo andar em que o elevador se encontra;

    Mesmo que o elevador não possa mais subir ou descer, ele ainda deve imprimir o andar em que o elevador se encontra.
    */

    const elevador = {
        totalAndares: 3,
        andarAtual: 0,

        subir() {
            if (elevador.andarAtual === elevador.totalAndares) {
                console.log(elevador.andarAtual);
                return elevador.andarAtual
            } else {
                elevador.andarAtual++;
            }

            console.log(elevador.andarAtual);
        },

        descer() {
            if (elevador.andarAtual === 0) {
                console.log(elevador.andarAtual);
                return elevador.andarAtual
            } else {
                elevador.andarAtual--;
            }

            console.log(elevador.andarAtual);
        }
    }
    console.log(elevador.andarAtual);
    console.log(elevador.totalAndares);
    elevador.subir();
    elevador.descer();
    elevador.descer();
    elevador.subir();
    elevador.subir();
    elevador.subir();
    elevador.subir();

}
elevador();

function copia() {
    /* 
        Neste desafio você vai receber um objeto na variável "meuObjeto". Você deve retornar uma cópia dele.
    */
       
    function main(myObj){
        const cp = {...myObj};
        return cp;
    }
    
    myObj = {"a": 1, "b": 2};
    main(myObj);
}
copia();

function comp() {
    /* Neste desafio você vai receber um objeto na variável “meuObjeto”. Esse objeto terá várias propriedades com valores numéricos diferentes.

    Sua tarefa é verificar cada uma das propriedades do objeto e remover apenas a propriedade que tiver o menor número. Após isso, retorne o objeto. */

    
    function main(meuObjeto){
        let obj = Object.keys(meuObjeto);
        let menorObj = obj[0];
        let menorValor = meuObjeto[menorObj];

        for (let i = 1; i < obj.length; i++) {
            if (meuObjeto[obj[i]] < menorValor) {
                menorObj = obj[i];
                menorValor = meuObjeto[menorObj];
            }
        }

        delete meuObjeto[menorObj];

        return meuObjeto;
    }
    meuObjeto = {"a": 1, "b": 2, "c": 3};
    console.log(main(meuObjeto));
}
comp();

function abc() {
    /* 
        Neste desafio você vai receber uma variável chamada "meusObjetos", que é um Array de objetos que possuem vários campos. Um dos campos se chama "titulo".

        Você também vai receber uma variável chamada "titulo".

        Sua tarefa é criar uma função que retorne o objeto que possui o título presente na variável "titulo”.
    */

    
    function main(meusObjetos, titulo){

        for (let i = 0; i < meusObjetos.length; i++) {
            if (meusObjetos[i].titulo === titulo) {
                return meusObjetos[i];
            }
        }
    }

    let meusObjetos = [{
            titulo: "abc",
            outroCampo: 123
        }, 
        {
            titulo: "def",
            outroCampo: 321
    }]

    let titulo = "abc";
    main(meusObjetos, titulo)
}
abc()

function main(meuObjeto) {
    const newObj = {},
    campos = Object.keys(meuObjeto);

    for(let i = 0; i < campos.length; i++) {
        const campo = campos[i];
        newObj[meuObjeto[campo]] = campo;
    }
    return newObj;
}
main(meuObjeto)

const obj = {
    a: 1,
    b: 2
}

delete obj.b;

console.log(obj);

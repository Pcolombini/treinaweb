const elementoNumeroUsuario = document.querySelector('#numeroUsuario'),
      enviar = document.querySelector("#enviar"),
      resetar = document.querySelector("#resetar"),
      elementoMinNumero = document.querySelector('#minNumero'),
      elementoMaxNumero = document.querySelector("#maxNumero"),
      elementoDica = document.querySelector("#dica"),
      elementoRestante = document.querySelector("#restante");

elementoNumeroUsuario.addEventListener('input', handleNumberInput)
enviar.addEventListener('click',guessNumber);
resetar.addEventListener('click', start);

const minNumero = 1,
    maxNumero = 100,
    totalRestantes = 5;

let numeroAtual ,
    numeroUsuario,
    tentativasRestantes;

function start() {
    numeroAtual = gerarNumero();
    numeroUsuario = minNumero;
    tentativasRestantes = totalRestantes;
    
    elementoNumeroUsuario.value = numeroUsuario;
    elementoMinNumero.innerText = minNumero;
    elementoMaxNumero.innerText = maxNumero;
    elementoDica.innerText = '';
    elementoRestante.innerText = tentativasRestantes;

    elementoNumeroUsuario.classList.remove('hidden');
    enviar.classList.remove('hidden');
    resetar.classList.add('hidden');
}

function gerarNumero() {
    return Math.floor(Math.random() * (maxNumero + 1 - minNumero)) + minNumero;
}

function handleNumberInput(event) {
    let value = parseInt(event.target.value || numeroUsuario || 0);
    value = handleMinMax(minNumero, value, maxNumero);
    numeroUsuario = value;
    event.target.value = value;
}

function handleMinMax(min, number, max) {
    return Math.min(Math.max(number, min),max)
}

function guessNumber() {
    tentativasRestantes--;
    elementoRestante.innerText = tentativasRestantes;
    if (numeroAtual === numeroUsuario) {
        elementoDica.innerText = `Acertou! O número é ${numeroAtual}`;
        gameOver();
    } else {
        if (tentativasRestantes > 0) {
            elementoDica.innerText = `O número é ${numeroAtual < numeroUsuario ? 'menor' : 'maior'}`
        } else {
            elementoDica.innerText = `Acabaram as tentativas! o número era ${numeroAtual}`;
            gameOver();
        }
    }
}

function gameOver() {
    elementoNumeroUsuario.classList.add('hidden');
    enviar.classList.add('hidden');
    resetar.classList.remove('hidden');
}

start();
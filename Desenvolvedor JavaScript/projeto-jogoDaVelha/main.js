let jogo = {

	// PARA COMEÇAR, PRECISAMOS DAS VARIÁVEIS QUE CONTROLAM O JOGO
	// PRIMEIRA COISA PRECISAMOS SABER EM QUAL TURNO ESTAMOS
	// turno: 0,
	// PRECISAMOS SABER QUEM É O JOGADOR ATUAL
	// jogadorAtual: 'X',
	// TEMOS QUE REPRESENTAR O CAMPO, O DESENHO DO JOGO DA VELHA
	// campo: [1,2,3,4,5,6,7,8,9],
	// PRECISAMOS SABER SE O JOGO ACABOU
	// jogoFinalizado: false,

	/*
		ESSAS SÃO AS VARIÁVEIS QUE VAMOS USAR, AGORA PRECISAMOS DAS FUNÇÕES QUE VÃO NOS AUXILIAR NO FUNCIONAMENTO DO JOGO.
	 */
	
	iniciarNovoJogo(){
		// ESSA FUNÇÃO VAI RETORNAR O OS VALORES DAS VARIÁVEOS PARA O INÍCIO
		jogo = {
			// PARA EVITAR COPIA E COLA, VAMOS DEIXAR AS VARIÁVEIS SOMENTE NA FUNÇÃO iniciarNovoJogo()
			...jogo,
			turno: 0,
			jogadorAtual: 'X',
			campo: [1,2,3,4,5,6,7,8,9],
			jogoFinalizado: false
		}
	},

	imprimir(){
		// ESSA FUNÇÃO É RESPONSÁVEL POR IMPRIMIR O CAMPO DE JOGO
		console.log(` 
			${jogo.campo[6]} | ${jogo.campo[7]} | ${jogo.campo[8]}
		   -----------
			${jogo.campo[3]} | ${jogo.campo[4]} | ${jogo.campo[5]}
		   -----------
			${jogo.campo[0]} | ${jogo.campo[1]} | ${jogo.campo[2]}
		`);
	},

	trocarJogador() {
		// ESSA FUNÇÃO NOS AUXILIA NA TROCA DE JOGADOR
		jogo.jogadorAtual = jogo.jogadorAtual === 'X' ? 'O' : 'X';
	},

	fazerJogada(posicao) {
		// O USUARIO DIGITA A POSIÇÃO DO CAMPO PARA MARCAR
		if (posicao > 0 && posicao < 10 && typeof jogo.campo[posicao - 1] === 'number') {
			jogo.campo[posicao - 1] = jogo.jogadorAtual;
			jogo.turno++;
			return true;
		}
		return false;
	},

	// ESCREVENDO UMA FUNÇÃO PARA DIMINUIR E ORGANIZAR AS COMPARAÇÃO DE GANHADOR
	// DICA: SEMPRE QUE ESCREVER MUITO UMA MESMA COISA E COMEÇA A BAGUNÇAR, FAÇA UMA FUNÇÃO PARA ORGANIZAR
	comparar: (a,b,c) => jogo.campo[a] === jogo.campo[b] && jogo.campo[a] === jogo.campo[c],

	verificarGanhador(){
		// VERIFICA SE EXISTE GANHADOR, COMPARA AS POSIÇÕES PARA SABER SE TEM LINHA, COLUNA OU DIAGONAL
		return (
			jogo.comparar(0,1,2) || jogo.comparar(3,4,5) || jogo.comparar(6,7,8) ||
			jogo.comparar(0,3,6) || jogo.comparar(1,4,7) || jogo.comparar(2,5,8) ||
			jogo.comparar(0,4,8) || jogo.comparar(2,4,6)
		);
	},

	verificarFimDeJogo(){
		// VAMOS VERIFICAR SE O JOGO ACABOU, SE TEVE EMPATE OU GANHADOR
		const temGanhador = jogo.verificarGanhador();

		if(temGanhador) {
			console.clear();
			jogo.imprimir();
			jogo.trocarJogador();
			console.log(`O ganhador é ${jogo.jogadorAtual}`);
			return true;
		} else if(jogo.turno >= 9) {
			console.clear();
			jogo.imprimir();
			console.log(`Deu velha!`);
			return true;
		} 
		return false;
	}
}

function iniciar() {
	jogo.iniciarNovoJogo();
	while (!jogo.jogoFinalizado) {
		console.clear();
		jogo.imprimir();
		console.log(`jogador Atual: ${jogo.jogadorAtual}`);
		const posicao = parseInt(prompt('Posição: '));
		if (!posicao) {
			break;
		}
		if(jogo.fazerJogada(posicao)){
			jogo.trocarJogador();
		}
		jogo.jogoFinalizado = jogo.verificarFimDeJogo();
	}
}

iniciar();
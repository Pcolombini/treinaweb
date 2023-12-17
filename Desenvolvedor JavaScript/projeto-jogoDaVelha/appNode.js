let velha = {

			iniciarJogo() {
				velha = {
					...velha,
					turno: 0,
					jogadorAtual: "X",
					campo: [1,2,3,4,5,6,7,8,9],
					jogoFinalizado: false
				}
			},


			imprimir() {
				console.log(`
					${velha.campo[6]} | ${velha.campo[7]} | ${velha.campo[8]}
				   ___________

					${velha.campo[3]} | ${velha.campo[4]} | ${velha.campo[5]}
				   ___________

					${velha.campo[0]} | ${velha.campo[1]} | ${velha.campo[2]}
				`)
			},


			trocarJogador() {
				velha.jogadorAtual = velha.jogadorAtual === "X" ? "O" : "X"
			},


			fazerJogada(posicao) {
				if (posicao > 0 && posicao < 10 && typeof velha.campo[posicao - 1] === "number") {
					velha.campo[posicao - 1] = velha.jogadorAtual;
					velha.turno++;
					return true;
				}
				return false;
			},

			comparar: (a,b,c) => velha.campo[a] === velha.campo[b] && velha.campo[a] === velha.campo[c],

			varificarGanhador() {
				return (
				velha.comparar(0, 1, 2) || velha.comparar(3, 4, 5) || velha.comparar(6, 7, 8) ||
				velha.comparar(0, 3, 6) || velha.comparar(1, 4, 7) || velha.comparar(2, 5, 8) ||
				velha.comparar(6, 4, 2) || velha.comparar(8, 4, 0) 
				);
			},

			verificarFimDaVelha() {
				const temGanhador = velha.varificarGanhador();
				if (temGanhador) {
					console.clear();
					velha.imprimir();
					velha.trocarJogador();
					console.log(`Ganhador é o player: ${velha.jogadorAtual}`);
					return true;
				} else if (velha.turno >= 9) {
					console.clear();
					velha.imprimir();
					console.log(`Deu Velha!`);
					return true;
				}
				return false;
			}


		}
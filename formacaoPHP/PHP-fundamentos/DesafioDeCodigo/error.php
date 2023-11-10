<?php

$dividendo = 6;
$divisor = 3;

try {

	if(!is_numeric($dividendo) || !is_numeric($divisor) || $dividendo == null && $divisor == null) {
		throw new Exception("Erro: Valores inválidos");
	}

	if (is_numeric($dividendo) && $dividendo > 0 && is_numeric($divisor) && $divisor > 0) {
		echo $dividendo / $divisor;
	} else {
		throw new Exception("Erro: Divisão por zero não permitida");
	}

} catch (Exception $e) {

	echo $e->getMessage();

}

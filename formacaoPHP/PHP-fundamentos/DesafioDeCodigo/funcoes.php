<?php 

$n = 5;

function fatorial($n) : int
{
	$resultado = 1;

	for ($i = 1; $i <= $n; $i++) { 
		$resultado = $resultado * $i;
	}

	return $resultado;

}

# print(fatorial($n));

$ano = intval(trim(readline("Qual o ano? ")));

function anoBissexto($ano) : bool
{
	if ($ano % 400 == 0) {
		return true;
	} elseif ($ano % 100 == 0) {
		return false;
	} elseif ($ano % 4 == 0) {
		return true;
	} else {
		return false;
	} 
}

if (anoBissexto($ano) == true) {
    echo "Ano bissexto";
}
else {
    echo "Não é ano bissexto";
}
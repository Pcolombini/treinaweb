<?php 

function soma($a, $b) : int
{
	return $a + $b;
}

echo PHP_EOL;
echo "Calculadora de SOMA!".PHP_EOL;
$x = readline('Primeiro Valor: ');
$y = readline('Segundo Valor: ');

$soma = soma($x,$y);
echo PHP_EOL;

echo $soma;
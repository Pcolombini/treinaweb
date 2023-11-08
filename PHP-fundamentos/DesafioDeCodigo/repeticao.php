<?php 

$numero = 2;

for ($i = 0; $i <= 10; $i++) {
	# echo "$numero x $i = ".($numero * $i).PHP_EOL;
}

$palavras = ["Java", "PHP", "C#", "Python", "JavaScript"];

foreach ($palavras as $resultado => $valor) {
	echo $valor.PHP_EOL;
}
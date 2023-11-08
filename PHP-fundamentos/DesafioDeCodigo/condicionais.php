<?php 

$numero = intval(trim(readline('Digite um número: ')));

if ($numero % 2 == 0 && $numero < 10){
	echo "Não é estranho";
} elseif ($numero % 2 == 0 && $numero <= 20) {
	echo "Estranho";
} elseif ($numero % 2 == 0 && $numero > 20) {
	echo "Não é estranho";
} else {
	echo "Estranho";
}


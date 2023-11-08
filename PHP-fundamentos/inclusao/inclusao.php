<?php 

echo "Início do arquivo inclusão";
echo PHP_EOL;

include 'variaveis.php';

echo "Variável nome vinda do include $nome".PHP_EOL;

include "funcoes/funcoes.php";

echo "Fim do arquivo inclusão";
echo PHP_EOL;
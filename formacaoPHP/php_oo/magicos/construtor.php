<?php 

use App\Classes\Cliente;

require_once '../autoload/autoload-psr4.php';

$cli = new Cliente('Paschoal', '21 9 9999 9999', 32);

// exit;

echo $cli->cidade;

$cli->alterar("Elton ", 29);

$cli(true);

var_dump($cli);
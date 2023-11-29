<?php

use App\Classes\Eletrodomestico;

require_once "../autoload/autoload-psr4.php";

// $obj = new App\Classes\Eletrodomestico;

$obj = new Eletrodomestico;

$obj->titulo = "Geladeira";
$obj->preco = 900.00;
$obj->defineCodigoDeBarras("00112");
$obj->definirVoltagem(220);

var_dump($obj);
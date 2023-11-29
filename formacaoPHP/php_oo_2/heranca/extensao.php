<?php

use App\Classes\Eletrodomestico;
use App\Classes\Microondas;

require_once "../autoload/autoload-psr4.php";

// $obj = new App\Classes\Eletrodomestico;

$obj = new Microondas;

$obj->titulo = "Geladeira";
$obj->preco = 900.00;
$obj->defineCodigoDeBarras("00112");
$obj->definirVoltagem(220);
$obj->definirPotencia(620);

var_dump($obj);
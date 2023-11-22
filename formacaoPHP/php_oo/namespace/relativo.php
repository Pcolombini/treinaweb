<?php 

require '../src/Email/Envio.php';
require '../src/Classes/Cliente.php';
require '../src/Email/Transporte.php';
require '..\src\Email\Adaptadores\Mailgun\Adaptador.php';

$envio = new \App\Email\Envio;

$envio->enviar();

var_dump($envio);
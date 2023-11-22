<?php 

require_once "../src/Email/Envio.php";
require_once "../src/SMS/Envio.php";

$email = new \App\Email\Envio;
$sms = new \App\SMS\Envio;

echo "Versão: ".\App\Email\VERSAO . "<br>";
\App\Email\validar("paschoal.colombini@gmail.com");

var_dump($email);
var_dump($sms);

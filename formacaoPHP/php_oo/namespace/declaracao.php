<?php 

require_once "../src/Email/Envio.php";
require_once "../src/SMS/Envio.php";

$email = new \Email\Envio;
$sms = new \SMS\Envio;

echo "Versão: ".\Email\VERSAO . "<br>";
\Email\validar("paschoal.colombini@gmail.com");

var_dump($email);
var_dump($sms);

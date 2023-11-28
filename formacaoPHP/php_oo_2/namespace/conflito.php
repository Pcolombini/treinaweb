<?php 

require_once "../src/Email/Envio.php";
require_once "../src/SMS/Envio.php";

$email = new \App\Email\Envio();
$sms = new \App\SMS\Envio();

var_dump($email);
var_dump($sms);
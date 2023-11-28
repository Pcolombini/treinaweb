<?php 
use Email\Adaptadores\SES\Adaptador;

require_once '/../treinaweb/formacaoPHP/php_oo/src/Email/Adaptadores/Mailgun/Adaptador.php';
require_once '/../treinaweb/formacaoPHP/php_oo/src/Email/Adaptadores/SES/Adaptador.php';

$mailgun = new \App\Email\Adaptadores\Mailgun\Adptador;

$ses = new \App\Email\Adaptadores\SES\Adaptador;

var_dump($mailgun, $ses);
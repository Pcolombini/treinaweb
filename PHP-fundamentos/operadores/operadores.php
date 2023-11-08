<?php 

# MATEMÁTICOS

$soma = 4 + 6;
$subtracao = 4 - 6;
$divisao = 4 / 6;
$multiplicacao = 4 * 6;

var_dump($soma).PHP_EOL;
var_dump($subtracao).PHP_EOL;
var_dump($divisao).PHP_EOL;
var_dump($multiplicacao).PHP_EOL;
echo PHP_EOL;

# COMPARADORES

$a = 1;
$b = 12;

var_dump($a > $b).PHP_EOL; // MAIOR => bool(false)
var_dump($a < $b).PHP_EOL; // MENOR => bool(true)
var_dump($a >= $b).PHP_EOL; // MAIOR OU IGUAL => bool(false)
var_dump($a <= $b).PHP_EOL; // MENOR OU IGUAL => bool(true)
var_dump($a == $b).PHP_EOL; // IGUAL A => bool(false)
var_dump($a != $b).PHP_EOL; // DIFERENTE DE => bool(true)
var_dump($a <> $b).PHP_EOL; // OUTRA FORMA DE DIFERENTE => bool(true)
echo PHP_EOL;

# IGUALDADE E TIPO

$d = 10;
$x = "10";

var_dump($d == $x).PHP_EOL; // COMPARA A IGUALDADE DE VALOR => bool(true)
var_dump($d === $x).PHP_EOL; // COMPARA A IGUALDADE E TIPO DE DADOS => bool(false)
var_dump($d != $x).PHP_EOL; // COMPARA A IGUALDADE DE VALOR => bool(false) 
var_dump($d !== $x).PHP_EOL; // COMPARA A DIFERENÇA E TIPO DE DADOS => bool(true)
echo PHP_EOL;

# OPERADORES LÓGICOS

$t = true;
$f = false;

var_dump($t && $f).PHP_EOL; // COMPARAÇÃO DE E => bool(false)
var_dump($t and $f).PHP_EOL; // COMAPARAÇÃO DE E => bool(false)
var_dump($t || $f).PHP_EOL; // COMPARAÇÃO DE OU => bool(true)
var_dump($t or $f).PHP_EOL; // COMPARAÇÃO DE OU => bool(true)
var_dump($t xor $f).PHP_EOL; // COMPARAÇÃO DE OU EXCLUSIVO => bool(true)
var_dump(!$t).PHP_EOL; // OPERADOR DE NEGAÇÃO => bool(false)
var_dump(!$f).PHP_EOL; // OPERADOR DE NEGAÇÃO => bool(true)

echo PHP_EOL;

# CONCATENAÇÃO

$escola = 'Treinaweb ';
$curso = 'PHP';
$frase = 'Faça o curso de '.$curso.' na '.$escola.'de '.$curso;
echo $frase;

echo PHP_EOL;

$string1 = "faça o curso de $curso na escola $escola"; // INTERPOLAÇÃO DE STRINGS


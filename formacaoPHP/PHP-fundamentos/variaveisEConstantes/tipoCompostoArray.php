<?php 

$arr = [1,2,3,4,5];
$linguagens = ['php','java','go','python'];

echo $linguagens[2].PHP_EOL;
echo $arr[4].PHP_EOL;

$linguagensDois = array('rust','javascript','ruby');

echo $linguagensDois[2].PHP_EOL;

$curso = ["nome" => "Curso de PHP Fundamentos","versão" => 7.4,"carga_horaria" => 40,"status" => true];

print_r($curso).PHP_EOL;

$cursoDeCurso = [ 
	"php" => ["nome" => "Curso de PHP Fundamentos","versão" => 7.4,"carga_horaria" => 40,"status" => true],
	"java" => ["nome" => "Curso de PHP Fundamentos","versão" => 7.4,"carga_horaria" => 40,"status" => true]
];

print_r($cursoDeCurso);




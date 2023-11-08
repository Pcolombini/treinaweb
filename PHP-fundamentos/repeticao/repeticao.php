<?php 

$a = 1;

while ($a <= 50) {
	echo $a." ";
	$a++;
}
echo PHP_EOL;echo PHP_EOL;
for ($i = 1; $i <= 10; $i++) {
	echo "$i ";
}
echo PHP_EOL;
echo PHP_EOL;
$array = [
1,2,3,4,5,6,7,8,9,10
];
echo PHP_EOL;
echo PHP_EOL;
echo "Usando o for".PHP_EOL;

for ($i = 0; $i < count($array); $i++) {
	echo "$array[$i] ";
}

echo PHP_EOL;
echo PHP_EOL;

echo "Usando o foreach".PHP_EOL;

foreach ($array as $chave => $numeros) {
	echo "chave $chave => valor [$numeros]".PHP_EOL; 
}

echo PHP_EOL;
echo PHP_EOL;

$cursos = [
	"PHP" => [
		"Nome" => "Curso de PHP Fundamentos",
		"Versão" => 7.4,
		"Carga_Horaria" => 70,
		"Status" => true
		],
	"Java" =>  [
		"Nome" => "Curso de JAVA Fundamentos",
		"Versão" => 11.4,
		"Carga_Horaria" => 30,
		"Status" => false
		],
	"C#" =>  [
		"Nome" => "Curso de C# Fundamentos",
		"Versão" => 5,
		"Carga_Horaria" => 60,
		"Status" => true
		]
];

foreach($cursos as $curso) {

	if ($curso['Status'] == false) {
		continue;
	}

	echo $curso["Nome"].PHP_EOL;
	echo $curso["Versão"].PHP_EOL;
	echo $curso["Carga_Horaria"].PHP_EOL;
	echo $curso["Status"].PHP_EOL;
}


<?php 

// ADICIONANDO VALOR À VARIÁVEL B POR REFERÊNCA DE A;

$a = 1;
$b =  &$a;

echo "Valor de A = $a, Valor de B = $b<br>";

// SE O VALOR DE B FOR ALTERADO POSTERIORMENTE, TAMBÉM O VALOR DE A SERÁ ALTERADO

$b = 2;

echo "Valor de A = $a e Valor de B = $b após alterar somente B<br>";

// ISSO ACONTECE POR QUE O VALOR É O MESMO, E AS DUAS VARIÁVEIS APONTAM PARA O MESMO LOCAL NA MEMÓRIA, E A ALTERAÇÃO É FEITA NO ENDEREÇO DA MEMÓRIA

?>

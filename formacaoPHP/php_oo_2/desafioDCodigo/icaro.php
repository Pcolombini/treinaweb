<?php

class Animal
{
    function andar(): void
    {
        print("Estou andando!". PHP_EOL);
    }
}


class Passaro extends Animal
{




    function voar(): void
    {
        print("Estou voando!". PHP_EOL);
    }
    
    function cantar(): void
    {
        echo "Estou cantando!".PHP_EOL;
    }
    

}
    
class Icaro extends Passaro {}

$icaro = new Icaro;

$icaro->andar();
$icaro->voar();
$icaro->cantar();
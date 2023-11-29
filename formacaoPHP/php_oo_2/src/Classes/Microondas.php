<?php 

namespace App\Classes;

use App\Classes\Eletrodomestico;

class Microondas extends Eletrodomestico
{
    public int $potencia;
    public function definirPotencia(int $potencia): void
    {
        $this->potencia = $potencia;
    }
}
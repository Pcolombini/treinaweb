<?php 

namespace App\Classes;

use App\Classes\Produto;

class Eletrodomestico extends Produto
{
    public int $voltagem;

    public function definirVoltagem(int $voltagem): void
    {
        if ($voltagem === 110 || $voltagem === 220) {
            $this->voltagem = $voltagem;
        }
    }
}
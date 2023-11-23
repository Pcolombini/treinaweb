<?php

namespace App\Classes;

class Produto
{
    public const NORMA = "1050";
    public string $titulo;
    public string $descricao = "Cerveja brasileira";
    public float $preco;

    public function defineCodigoDeBarras(string $codigo): void
    {
        //$this->codigoBarras = $codigo;
    }

    public function acessaCodigoBarras(): void
    {
        //echo $this->codigoBarras;
    }
}

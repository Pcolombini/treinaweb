<?php

class Produto
{
    public const NORMA = "1050";
    public $titulo;
    public $descricao = "Cerveja brasileira";
    public $preco;

    public function defineCodigoDeBarras($codigo)
    {
        //$this->codigoBarras = $codigo;
    }

    public function acessaCodigoBarras()
    {
        //echo $this->codigoBarras;
    }
}

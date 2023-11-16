<?php 

require_once('src/Classes/Fornecedor.php');

$fornecedor = new Fornecedor;

$fornecedor->autorizar(new class {
    public $nome = "João";
    public $senha = "123456";
});

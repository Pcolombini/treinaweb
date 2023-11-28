<?php 

require_once 'autoload.php';

$prod1 = new Produto;
$prod1->titulo = 'Skol';
$prod1->descricao = 'Cerveja Pilsen';
$prod1->preco = 2.50;

$cli = new Cliente;
$cli->nome = 'Paschoal';
$cli->idade = 32;
$cli->endereco = 'Rua da Rua 1990';
$cli->telefone = '21 9 9999 9999';

$fornecedor = new Fornecedor;
$fornecedor->cnpj = '147852147456';
$fornecedor->nomeFantasia = 'Bla';
$fornecedor->razaoSocial = 'BlaBla';

var_dump($prod1, $cli, $fornecedor);

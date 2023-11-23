<?php

namespace App\Classes;
class Cliente
{
    public string $nome;
    public int $idade;
    public string $endereco;
    public string $telefone;

    public function __construct(string $nome, $teleone, int $idade) 
    {
        $this->nome = $nome;
        $this->telefone = $teleone;
        $this->idade = $idade;
    }

    public function comprar(): void
    {
        echo "O cliente {$this->nome} realizou uma compra<br>";
    }

    public function definirNome(string $nome): void
    {
        $this->nome = $nome;
        echo $nome;
    }
}

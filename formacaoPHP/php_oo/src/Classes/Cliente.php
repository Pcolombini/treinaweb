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

    public function __set(string $nomePropriedade, $valorPropriedade)
    {
        if ($nomePropriedade == 'cpf') {
            $this->cpf = str_replace('.','',$valorPropriedade);
        } else {
            $this->$nomePropriedade = $valorPropriedade;
        }
    }

    public function __sleep(): array
    {
        return ['nome', 'idade'];
    }

    public function __wakeup()
    {
        return;
        // $this->tipo = "Serializado";
    }

    public function __toString(): string
    {
        return $this->nome . ", " . $this->idade . " anos";
    }

    public function __call(string $nomeMetodo, array $argMetodo): void
    {
        var_dump($nomeMetodo, $argMetodo); 
    }

    public function __invoke(bool $status)
    {
        $this->status = $status;
    }

    public function __get(string $nomePropriedade)
    {
        return "A propriedade não existe";
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

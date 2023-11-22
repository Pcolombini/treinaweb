<?php 

namespace App\Email;

const VERSAO = 1.0;
class Envio
{
    public function enviar(): void
    {
        $adptador = new Adaptadores\Mailgun\Adptador;

        $transporte = new Transporte;

        $obj = new \stdClass;

        $cli = new \Cliente;

        \var_dump($adptador, $transporte, $obj, $cli);

        var_dump($adptador, $transporte, $obj, $cli);
    }
}

function validar(string $mail): void
{
    echo "Endereço: $mail é válido";
}
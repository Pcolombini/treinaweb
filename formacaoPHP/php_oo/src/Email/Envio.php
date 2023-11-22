<?php 

namespace App\Email;

const VERSAO = 1.0;
class Envio
{
    public function enviar(): void
    {
        $adptador = new Adaptadores\Mailgun\Adptador;

        $transporte = new Transporte;

        var_dump($adptador, $transporte);
    }
}

function validar(string $mail): void
{
    echo "Endereço: $mail é válido";
}
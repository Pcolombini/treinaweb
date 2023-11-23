<?php 

namespace App\Email;

use App\Email\Adaptadores\Mailgun\Adaptador as Mailgun;

use App\Email\Adaptadores\SES\Adaptador as Ses;

use App\Classes\Cliente;


const VERSAO = 1.0;

class Envio
{
    public function enviar(): void
    {
        $adptador = new Mailgun;

        $transporte = new Transporte;

        $obj = new \stdClass;

        $cli = new Cliente;

        \var_dump($adptador, $transporte, $obj, $cli);

        var_dump($adptador, $transporte, $obj, $cli);
    }

    public function m1()
    {
        $adptador = new Mailgun;
    }

    public function m2()
    {
        $adptador = new Ses;
    }

}

function validar(string $mail): void
{
    echo "Endereço: $mail é válido";
}
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>this</title>
</head>

<body>
    <main>
        <section>
            <?php

            echo "<html lang='pt-br'>";

            require_once './src/Classes/Produto.php';
            require_once './src/Classes/Cliente.php';
            require_once './src/Classes/Fornecedor.php';

            $cli = new Cliente();
            $cli->nome = "João";
            $cli->idade = 40;
            $cli->endereco = "São Paulo";
            $cli->telefone = "(11) xxxxx-xxxx";

            var_dump($cli);
            $cli->comprar();

            $cli2 = new Cliente();
            $cli2->nome = "Maria";
            $cli2->idade = 40;
            $cli2->endereco = "São Paulo";
            $cli2->telefone = "(11) xxxxx-xxxx";

            var_dump($cli2);
            $cli2->comprar();

            $cli2->definirNome("Marião");

            ?>
        </section>
    </main>
</body>

</html>
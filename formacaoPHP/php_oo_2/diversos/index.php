<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Index</title>
</head>

<body>
    <main>
        <section>
            <?php

            echo "<html lang='pt-br'>";

            require_once './src/Classes/Produto.php';
            require_once './src/Classes/Cliente.php';
            require_once './src/Classes/Fornecedor.php';

            $prod1 = new Produto();

            $prod1->titulo = "Skol";
            $prod1->descricao = "Cerveja Pilsen";
            $prod1->preco = 2.5;


            var_dump($prod1);

            $prod2 = new Produto();

            $prod2->titulo = "Itaipava";
            $prod2->descricao = "Cerveja brasileira";
            $prod2->preco = 1.9;


            var_dump($prod2);

            $cli = new Cliente();

            $cli->nome = "João";
            $cli->idade = 40;
            $cli->endereco = "São Paulo";
            $cli->telefone = "(11) xxxxx-xxxx";

            var_dump($cli);
            $cli->comprar();

            # INSTANCIANDO CLASSE DINÂMICAMENTE

            $nomeClasse = "Fornecedor";

            $instancia = new $nomeClasse;

            var_dump($instancia);

            $cli2 = new $cli;

            var_dump($cli2);

            $nomeClasse2 = get_class($cli);
            $cli3 = new $nomeClasse2;
            $cli3->nome = "Eduardo";

            var_dump($cli);
            var_dump($cli2);
            var_dump($cli3);
            ?>
        </section>
    </main>
</body>

</html>
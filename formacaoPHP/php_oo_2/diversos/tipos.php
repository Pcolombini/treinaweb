<?php 
    // DECLARANDO O MODO ESTRITO
    declare(strict_types= 1); 
    require_once "src/Classes/Fornecedor.php";
?>
<!DOCTYPE html>
<html lang="pr-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet">
    <title>Tipos de dados no PHP</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            
            font-family: 'Atkinson Hyperlegible', sans-serif;
        }

        .titulo {
            text-align: start;
            margin: 20px 50px;
        }

        .titulo a {
            text-decoration: none;
            color: black;
        }

        .titulo a:hover {
            color: blue;
            font-size: 18px;
        }

        .texto {
            text-align: start;
            margin: 20px 50px;
        }

        .texto-intro p {
            margin: 18px 0;
        }
    </style>
</head>

<body>
    <header class="titulo">
        <a href="https://www.treinaweb.com.br/blog/tipos-no-php">
            <h1>Tipos no PHP</h1>
        </a>
    </header>
    <main>
        <section class="texto">
            <section class="texto-intro">

            </section>
        </section>
        <section class="texto texto-intro php">
            <p>
                <?php
                $fornecedor = new Fornecedor;

                $fornecedor->cnpj = "12123015/0001-87";
                $fornecedor->nomeFantasia = "Meu negócio";
                $fornecedor->razaoSocial = "Brilha estrelinha";

                var_dump($fornecedor);
                $fornecedor->autorizar(new class
                {
                    public string $nome = "João";
                    public string $senha = "123456";
                });
                ?>
            </p>
        </section>
    </main>
</body>

</html>
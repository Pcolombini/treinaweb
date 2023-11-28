<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Comparando Objetos</title>
</head>

<body>
    <main>
        <section class="php">
            <?php
            require_once 'src/Classes/Produto.php';
            require_once './src/Classes/Cliente.php';
            require_once './src/Classes/Fornecedor.php';

            $prod1 = new Produto();
            $prod1->titulo = "Skol";
            $prod1->descricao = "Cerveja Pilsen";
            $prod1->preco = 2.5;

            $prod2 = new Produto();
            $prod2->titulo = "Skol";
            $prod2->descricao = "Cerveja Pilsen";
            $prod2->preco = 2.5;

            var_dump($prod1 == $prod2); 
            var_dump($prod1 === $prod2); // COMPARANDO A REFERENCIA EM MEMORIA

            $prod3 = new Produto();
            $prod3->titulo = "Skol Litrão";
            $prod3->descricao = "Cerveja Pilsen";
            $prod3->preco = 2.5;

            var_dump($prod1 == $prod3);

            // APONTA PARA O MESMO OBJETO NA MEMÓRIA
            $prod4 = $prod1;
            var_dump($prod1 === $prod4);
            ?>
        </section>
    </main>
</body>

</html>
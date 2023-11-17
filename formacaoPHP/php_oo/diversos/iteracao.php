<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <title>iterando objetos</title>
    </head>
    <body>
        <section>
            <p>
                <?php
                    require_once './src/Classes/Produto.php';
                    require_once './src/Classes/Cliente.php';
                    require_once './src/Classes/Fornecedor.php';
    
                    $prod1 = new Produto();
    
                    $prod1->titulo = "Skol";
                    $prod1->descricao = "Cerveja Pilsen";
                    $prod1->preco = 2.5;

                    foreach($prod1 as $key => $value) {
                        echo "$key: $value<br>";
                    }
    
                ?>
            </p>
        </section>
    </body>
</html>

<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <title>Propriedades em tempo de execução</title>
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
                    //$prod1->desconto = 0.1;

                    $prod1->defineCodigoDeBarras('000012');
                    
                    var_dump($prod1);
                    $prod1->acessaCodigoBarras();
                    
    
                ?>
            </p>
        </section>
    </body>
</html>

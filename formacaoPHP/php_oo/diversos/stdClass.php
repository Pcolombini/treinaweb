<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>standard class</title>
</head>
<body>
    <main>
        <section>
            <?php 
                $generica = new stdClass();
                $generica->nome = 'Treinaweb';
                $generica->curso = "PHP - OO";

                var_dump($generica);

                $array = [
                    "nome" => "Treinaweb",
                    "curso" => "PHP - OO"
                ];

                $obj = (object) $array;

                var_dump($obj);
            ?>
        </section>
    </main>
</body>
</html>
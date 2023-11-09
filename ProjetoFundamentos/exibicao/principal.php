<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <?php require_once(realpath(dirname(__FILE__) . '/../exibicao/bootstrap/css-bootstrap.php')); ?>
    <title>Projeto PHP Fundamentos</title>
</head>

<body>
    <nav class="navbar navbar-light bg-light">
        <span class="navbar-brand mb-0 h1">TreinaWeb</span>
    </nav>
    <pre>
    <?php # print_r(cursos()) 
    ?>
    </pre>
    <div class="container">
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Nome do Curso</th>
                    <th scope="col">Carga Horaria</th>
                    <th scope="col">Versão</th>
                </tr>
            </thead>
            <tbody>
                <?php foreach (cursos() as $curso) : ?>
                    <?php if ($curso['Status'] == false) continue; ?>
                    <tr>
                        <th scope="row"><?= $curso["Nome"] ?></th>
                        <td><?= cargaHoraria($curso["Carga_Horaria"]) ?></td>
                        <td><?= $curso["Versão"] ?></td>
                    </tr>
                <?php endforeach; ?>
            </tbody>
        </table>
    </div>

    <?php require_once(realpath(dirname(__FILE__) . '/../exibicao/bootstrap/css-bootstrap.php')); ?>
</body>

</html>
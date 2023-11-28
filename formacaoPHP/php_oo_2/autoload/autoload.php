<?php 

function carregar(string $nomeClasse): void
{
    $caminhoCompleto = __DIR__. "/../src/Classes/$nomeClasse.php";

    if (file_exists($caminhoCompleto)) {
        require_once $caminhoCompleto;
    }
}

spl_autoload_register("carregar");

/**
 * USANDO O MESMO RECURSO COM UMA CLASSE ANÔNIMA
 * 
 * spl_autoload_register(
 *   // CLASSE ANONIMA
 *   function (string $nomeClasse): void
 *   {
 *       $caminhoCompleto = __DIR__. "/../src/Classes/$nomeClasse.php";
 *
 *       if (file_exists($caminhoCompleto)) {
 *           require $caminhoCompleto;
 *       }
 *   }
*);
 */
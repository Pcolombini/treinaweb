<?php 

function carregar(string $nomeCompleto): void
{
    //NAMESPACE DE BASE, PRECISA SER RETIRADO DA INCLUSÃO
    $nameSpaceRaiz = "App\\"; //REPRESENTA A PASTA SRC

    // RECEBE O CAMINHO COMPLETO
    $diretorioBase = __DIR__ . "/../src/";

    // DESCOBRE O TAMANHO DO NAMESPACE
    $tamanhoNameSpaceRaiz = strlen($nameSpaceRaiz);

    
    $nameSpaceRaizRecebido = substr($nomeCompleto,0,$tamanhoNameSpaceRaiz);

    if ($nameSpaceRaiz !== $nameSpaceRaizRecebido) {
        return;
    }

    // PEGA O SUBNAMESPACE APARTIR DO FINAL DO NAMESPACE RAIZ
    $caminhoRelativo = substr($nomeCompleto, $tamanhoNameSpaceRaiz);

    // AQUI MONTAMOS O CAMINHO DO ARQUIVO PARA O AUTOLOAD
    $caminhoArquivo = $diretorioBase . str_replace('\\','/',$caminhoRelativo) . ".php"; // STR_REPLACE PARA SUBSTITUIR AS BARRAS INVERTIDAS E FICAR COMPATÍVEL COM OUTROS SISTEMAS

    // AQUI INCLUIMOS O ARQUIVO SE O CAMINHO FOR VERDADEIRO
    if (file_exists($caminhoArquivo)) {
        require_once $caminhoArquivo;
    }
}

spl_autoload_register("carregar");

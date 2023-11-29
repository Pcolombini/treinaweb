<?php

class Aritmetica
{
    public function subtracao(int $a, $b): int
    {
        return $a - $b;
    }
}

class Sub extends Aritmetica
{
}

$class = new ReflectionClass('Sub');

print("Minha superclasse é: " . $class->getParentClass()->name . PHP_EOL);

print(count($class->getMethods()) > 1 ? "Classe possui mais de um método" . PHP_EOL : $class->getMethods()[0]->getDeclaringClass()->name . PHP_EOL);

$t = intval(fgets(STDIN));

$sub = new Sub;

for ($i = 0; $i < $t; $i++) {
    [$var1, $var2] = array_map('intval', explode(" ", fgets(STDIN)));
    print($sub->subtracao($var1, $var2) . PHP_EOL);
}

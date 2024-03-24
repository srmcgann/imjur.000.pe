<?php

$testvar = 123;

$sql = <<<SQL
this is the value of the testvar $testvar
SQL;
echo "$sql\n";
?>

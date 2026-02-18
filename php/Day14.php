<?php 

$names = "heaven";

$char = str_split($names);

$char[0] = strtoupper($char[0]);

$result = implode("", $char );

echo $result

?>
<?php 
    // 8. contatenate boolean and string without getting an error

$vaule = true; 
$text = "this vaule is ";
$result = $text . ($vaule ? "true" : "false");

echo $result
?>
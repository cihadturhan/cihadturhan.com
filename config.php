<?php
define('DIR', 'dist'); //dev or dist 

function load_package_config() {
    $path = 'package.json';
    $string = file_get_contents($path);
    return json_decode($string, true);
}
?>
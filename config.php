<?php
define('DIR', 'dist'); //dev or dist 

function load_package_config() {
    $path = 'dirs.json';
    $string = file_get_contents($path);
    return json_decode($string, true);
}
?>
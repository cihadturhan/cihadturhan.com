<?php
define('DIR', 'dist'); //dev or dist 
$version = '0.0.9';

function load_package_config() {
    GLOBAL $version;
    
    $path = 'dirs.json';
    $pkg = 'package.json';

    $pkg_arr = json_decode(file_get_contents($pkg), true);
    $dirs = json_decode(file_get_contents($path), true);

    $version = $pkg_arr['version'];

    foreach($dirs as $type_name => $type){
        foreach($type[DIR] as $group_name => $group){
            foreach($group as $file_name => $file){
                $dirs[$type_name][DIR][$group_name][$file_name] .= "?v=$version";
            }
        }
    }

    return $dirs;
}
?>
<?php
    $url = 'localhost';
    $name = 'root';
    $pass = '';
    $db_name = "job";  
    $connect = mysqli_connect($url, $name, $pass, $db_name);
    if(mysqli_connect_errno()) {  
        die("Failed to connect with MySQL: ". mysqli_connect_error());  
    }  
?>
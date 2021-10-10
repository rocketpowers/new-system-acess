<?php

$hostname="localhost";
$user="root";
$password="root"
$database="clients"
$conection=mysqli_connect($hostname,$user,$password,$database);


if (!$connection){ print "fail connection with bank"; }


?>
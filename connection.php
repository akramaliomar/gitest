<?php
$server="localhost";
$db="agroshop";
$user="root";
$pass="";
$connection=new mysqli($server,$user,$pass,$db);
if ($connection->connect_errno) {
    die($connection->connect_error);
   }
?>
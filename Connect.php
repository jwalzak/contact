<?php
    //Declare database variables
    define("HOST", "localhost");
    define("USER", "lampuser");
    define("PASSWORD", "password");
    define("DATABASE", "proj_2");

    //Create connection
    $conn = new mysqli(HOST, USER, PASSWORD, "DATABASE");

    //Error
    if($conn->connect_error){
        die("Could not connect: " . $conn->connect_error);
    }
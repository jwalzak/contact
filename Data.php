<?php
/**
 *  This file will do all of the data handling.
 */
require_once('Connect.php');

if($_SERVER['REQUEST_METHOD'] == "GET" && isset($_GET['search_input'])){
    echo "here";
}

if($_SERVER['REQUEST_METHOD'] == "GET" && $_GET['action'] == "load"){
    $listArray = array("one" => 1, "two" => 2);
    echo json_encode($listArray);
}


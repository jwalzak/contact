<?php
/**
 *  This file will do all of the data handling.
 */
require_once('Connect.php');

if($_SERVER['REQUEST_METHOD'] == "GET" && isset($_GET['search_input'])){
    echo "here";
}


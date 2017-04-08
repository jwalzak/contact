<?php

/**
 *  This file will do all of the data handling.
 */
require_once('Connect.php');

if($_SERVER['REQUEST_METHOD'] == "GET" && isset($_GET['action'])){
header("Content-Type:applicaton/json");

    if($_GET['action'] == "load"){
        loadContact($conn);
    }//end if

    if($_GET['action'] == 'update' && isset($_GET['id'])){
        $id = $_GET['id'];
        loadOneContact($conn, $id);
    }//End
}//End if

if($_SERVER['REQUEST_METHOD'] == "POST" && isset($_GET['action'])){
    if($_GET['action'] == 'saveupdate'){
        echo json_encode($_POST);
    }//end inner if

}//End if

function loadContact($connection){
    
    $listArray = array();
    $query = "SELECT * FROM addresses";
    $rs = $connection->query($query);

    while($info = $rs->fetch_assoc()){
        array_push($listArray, $info);
    }//End while

    echo json_encode($listArray);
}//End loadFunction 

function loadOneContact($connection, $id){
    $listArray = array();
    $query = "SELECT * FROM addresses WHERE addr_id=" . $id;
    $rs = $connection->query($query);

    while($info = $rs->fetch_assoc()){
        array_push($listArray, $info);
    }//End while
    echo json_encode($listArray);
}





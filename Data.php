<?php
/**
 *  This file will do all of the data handling.
 */
require_once('Connect.php');

if($_SERVER['REQUEST_METHOD'] == "GET"){

    if($_GET['action'] == "load"){
        loadContact($conn);
    }//end if

}//End if

function loadContact($connection){
    
    $listArray = array();
    $query = "SELECT  * FROM addresses";
    $rs = $connection->query($query);

    while($info = $rs->fetch_assoc()){
        array_push($listArray, $info);
    }//End while

    echo json_encode($listArray);
}//End loadFunction 






<?php
/**
 *  This file will do all of the data handling.
 */
require_once('Connect.php');

if($_SERVER['REQUEST_METHOD'] == "GET"){
    echo "here";

    if($_GET['action'] == "load"){
        loadContact($conn);
    }//end if

}//End if

function loadContact($connection){
    $listArray = array();
    $query = "SELECT  * FROM addresses";
    $rs = $conn->query($query);

    while($info = $rs->fetch_assoc()){
        array_push($listArray, $info);
    }//End while

    echo json_encode($listArray);
}//End loadFunction 






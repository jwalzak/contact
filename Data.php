<?php

/**
 *  This file will do all of the data handling.
 */
require_once('Connect.php');

if(isset($_GET['action'])){
header("Content-Type:applicaton/json");

    if($_GET['action'] == "load"){
        loadContact($conn);
    }//end if

    if($_GET['action'] == 'update' && isset($_GET['id'])){
        $id = $_GET['id'];
        loadOneContact($conn, $id);
    }//End
    
    if($_GET['action'] == 'saveupdate' && $_SERVER['REQUEST_METHOD'] == "POST"){
        updateContact($conn);
    }//end inner if

    if($_GET['action'] == 'newcontact' && $_SERVER['REQUEST_METHOD'] == 'POST'){
        saveNew($conn);
    }//End inner if

    if($_GET['action'] == 'search' && $_SERVER['REQUEST_METHOD'] == 'POST'){
        search($conn);
    }//End if

    if($_GET['action'] == 'delete' && $_SERVER['REQUEST_METHOD'] == 'GET'){
        $id = $_GET['id'];
        deleteCon($conn, $id);
    }//End if

}//End if

function saveNew($connection){
    $firstName = $_POST['firstName'];
    $lastName = $_POST['lastName'];
    $city = $_POST['city'];
    $region = $_POST['region'];
    $emailOne = $_POST['emailOne'];
    $emailTwo = $_POST['emailTwo'];
    $phoneNumOne = $_POST['phoneNumOne'];
    $phoneNumTwo = $_POST['phoneNumTwo'];

    echo json_encode($_POST);


    $query = sprintf("INSERT INTO  addresses (addr_first_name, addr_last_name, addr_city,  addr_region, addr_email_1, addr_email_2, addr_phone_1, addr_phone_2) VALUES ('%s', '%s','%s','%s','%s','%s','%s','%s')",
    $firstName, $lastName, $city, $region, $emailOne, $emailTwo, $phoneNumOne, $phoneNumTwo);
    $rs = $connection->query($query);

}//End saveNew()

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
}//End loadOneContact();

function search($connection){
    $listArray = array();
    $searchQuery = $_POST['searchInput'];
    $query = "SELECT * FROM addresses WHERE addr_first_name="."'$searchQuery'";
    $rs = $connection->query($query);

        while($info = $rs->fetch_assoc()){
            array_push($listArray, $info);
        }//End while
    echo json_encode($listArray);
}//End serach() 

function deleteCon($connection, $id){
    $query = "DELETE FROM addresses WHERE addr_id=" . $id. ";";
    $rs = $connection->query($query);
    $replyArray = array("you"=>"did", "it"=>"!");
    echo json_encode($replyArray);
}//End deleteCon

function updateContact($connection){
    $firstName = $_POST['firstName'];
    $lastName = $_POST['lastName'];
    $city = $_POST['city'];
    $region = $_POST['region'];
    $emailOne = $_POST['emailOne'];
    $emailTwo = $_POST['emailTwo'];
    $phoneNumOne = $_POST['phoneNumOne'];
    $phoneNumTwo = $_POST['phoneNumTwo'];
    $id = $_GET['id'];

    $query = 'UPDATE addresses SET 
                     addr_first_name= "'.$firstName.'",
                     addr_last_name= "'.$lastName.'",
                     addr_city="'.$city.'",
                     addr_region="'.$region.'",
                     addr_email_1="'.$emailOne.'",
                     addr_email_2="'.$emailTwo.'",
                     addr_phone_1="'.$phoneNumOne.'",
                     addr_phone_2="'.$phoneNumTwo.'" 
                     WHERE addr_id="'.$id.'"';

$rs = $connection->query($query);
}//End updateContact()





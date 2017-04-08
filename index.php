<?php
require_once("data.php");
require_once("Connect.php");
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>CONTACTOR</title>
    
    <!--Fonts used Space Mono and Arvo-->
    <link href="https://fonts.googleapis.com/css?family=Arvo|Space+Mono:700" rel="stylesheet">
    <link rel="stylesheet" href="css/bootstrap-3.3.7-dist/css/bootstrap.min.css" />
    <link rel="stylesheet" href="css/svg.css" />
    <link rel="stylesheet" href="css/style.css" />

    <!-- <script type="text/javascript" src="/css/bootstrap-3.3.7-dist/js/bootstrap.min.js"></script> -->
    <script type="text/javascript" src="./js/jquery-3.1.1.js"></script>
    <script type="text/javascript" src="./js/main.js"></script>
</head>
<body>
<div class="container-fluid">
    <div class="col-md-12">
        <header class="top">
            <h1 class="title" id="title">Contact</h1>
        </header>
    </div>
    <div id="form" class="col-md-4">
        <main>
            <form id="search" action="">
                <label for="search">Search by Full name:</label><input class="inputText" name="searchInput" id="search" type="text">
                <input type="submit" class="btn-info btn-lg" value="Search">
            </form>
            <form method="post" id="saveNew">
                <input type="text" class="inputText" id="firstName" name="firstName"><label for="firstName">First Name</label><br />
                <input type="text" class="inputText" id="lastName" name="lastName"><label for="lastName">Last Name</label><br />
                <input type="text" class="inputText" id="city" name="city"><label for="city">City</label><br />
                <input type="text" class="inputText" id="region" name="region"><label for="region">Region</label><br />
                <input type="text" class="inputText" id="emailOne" name="emailOne"><label for="emailOne">Email 1</label><br />
                <input type="text" class="inputText" id="emailTwo" name="emailTwo"><label for="emailTwo">Email 2</label><br />
                <input type="text" class="inputText" id="phoneOne" name="phoneNumOne"><label for="phoneNumOne">Phone Number 1</label><br />
                <input type="text" class="inputText" id="phoneTwo" name="phoneNumTwo"><label for="phoneNumTwo">Phone Number 2</label><br />
                <input type="submit" id="saveButt" class="btn btn-info btn-large">
            </form>
    </div>

        <div id="contacts" class="contacts col-md-8"></div>
    </div>
        </main>

</body>
</html>
<?php
require_once("data.php");
require_once("Connect.php");
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>CONTACT</title>
    
    <!--Fonts used Space Mono and Arvo-->
    <!--Style-->
    <link href="https://fonts.googleapis.com/css?family=Arvo|Space+Mono:700" rel="stylesheet">
    <link rel="stylesheet" href="css/bootstrap-3.3.7-dist/css/bootstrap.min.css" />
    <link rel="stylesheet" href="css/svg.css" />
    <link rel="stylesheet" href="css/style.css" />

    <!--Scripts-->
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
    <div id="form" class="col-md-4 col-sm-12">
        <main>
            <form id="search" action="">
            <div class="form-group">
                <label for="search">Search by first name:</label><input class="form-control input-sm" name="searchInput" id="search" type="text">
                <input type="submit" class="btn-info btn-sm" value="Search">
            </div>
            </form>
            <form method="post" id="saveNew">
            <div class="form-group">
                <label for="firstName">First Name</label>
                <input type="text" class="form-control input-sm" id="firstName" name="firstName"><br />
                <label for="lastName">Last Name</label>
                <input type="text" class="form-control input-sm" id="lastName" name="lastName"><br />
                <label for="city">City</label>
                <input type="text" class="form-control input-sm" id="city" name="city"><br />
                <label for="region">Region</label>
                <input type="text" class="form-control input-sm" id="region" name="region"><br />
                <label for="emailOne">Email 1</label>
                <input type="text" class="form-control input-sm" id="emailOne" name="emailOne"><br />
                <label for="emailTwo">Email 2</label>
                <input type="text" class="form-control input-sm" id="emailTwo" name="emailTwo"><br />
                <label for="phoneNumOne">Phone Number 1</label>
                <input type="text" class="form-control input-sm" id="phoneOne" name="phoneNumOne"><br />
                <label for="phoneNumTwo">Phone Number 2</label>
                <input type="text" class="form-control input-sm" id="phoneTwo" name="phoneNumTwo"><br />
                <input type="submit" id="saveButt" class="btn btn-info btn-sm">
            </div>
            </form>
    </div>

        <div id="contacts" class="contacts row table-row col-md-8 col-sm-12"></div>
    </div>
        </main>

</body>
</html>
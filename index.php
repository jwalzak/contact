<?php
require_once("data.php");
require_once("Connect.php");
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>CONTACTOR</title>
    <link rel="stylesheet" href="css/style.css" />
    <script type="text/javascript" src="./js/jquery-3.1.1.js"></script>
    <script type="text/javascript" src="./js/main.js"></script>
</head>
<body>
    <header class="top">
        <h1 class="title" id="title">Contactor, the web's formost Contact getting bot!</h1>
    </header>
    <main>
        <form action="">
            <label for="search">Search by Full name:</label><input name="search_input" id="search" type="text">
            <input type="submit" value="Search">
        </form>
        <form action="">
            <input type="text" name="firstName"><label for="firstName">First Name</label><br />
            <input type="text" name="lastName"><label for="lastName">Last Name</label><br />
            <input type="text" name="city"><label for="city">City</label><br />
            <input type="text" name="region"><label for="region">Region</label><br />
            <input type="text" name="emailOne"><label for="emailOne">Email 1</label><br />
            <input type="text" name="emailTwo"><label for="emailTwo">Email 2</label><br />
            <input type="text" name="phoneNumOne"><label for="phoneNumOne">Phone Number 1</label><br />
            <input type="text" name="PhoneNumTwo"><label for="phoneNumTwo">Phone Number 2</label><br />
            <input type="submit">
        </form>

        <div id="contacts" class="contacts">
            
        </div>
    </main>
</body>
</html>
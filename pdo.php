<?php

    $pdo = new PDO('mysql:host=sql3.freesqldatabase.com;port=3306;dbname=sql3505436',
        'sql3505436', 'p9YaPAJQk9');

    //throws error if select if wrong
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

?>
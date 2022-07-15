<?php

    $pdo = new PDO('mysql:host=sql3.freesqldatabase.com;port=3306;dbname=sql3505436',
        ${{secrets.DB_USER}}, ${{secrets.DB_PWD}});

    //throws error if select if wrong
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

?>
<?php
    echo ("<p>Adding information...</p>");
    require_once "pdo.php";

    if( isset($_POST['oName']) && isset($_POST['pNum']) && isset($_POST['email']) && isset($_POST['rName'])
    && isset($_POST['rAdd']) && isset($_POST['pass']) ){

        //echo password_hash($_POST['pass'], PASSWORD_DEFAULT);

            $sql = "INSERT INTO restaurants(owner_name, phone_number, email, rest_name, rest_add, pwd_hash) 
                VALUES(:oName, :pNum, :email, :rName, :rAdd, :pass)";

            $stmt = $pdo->prepare($sql);

            $stmt->execute(array(
                ':oName' => $_POST['oName'],
                ':pNum' => $_POST['pNum'],
                ':email' => $_POST['email'],
                ':rName' => $_POST['rName'],
                ':rAdd' => $_POST['rAdd'],
                ':pass' => $_POST['pass']));

        }

?>
<html>
        <head></head>

    <body>
        <?php echo ("<p>$sql</p>"); ?>
        <p>Registration Complete</p>
    </body>

</html>
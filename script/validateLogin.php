<?php
/**
@This part is used for validating if the login message is right
*/

//load database info
require_once("dbinfo.php");

//create a PDO object
$dbh    = new PDO($dsn, $user, $passwd);
$dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$dbh->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);
try {
    $sql  = "SELECT * from account WHERE id =:id";
    $stmt = $dbh->prepare($sql);
    $stmt->execute(array(
        ':id' => $_POST['id']
    ));
    $row = $stmt->fetch(PDO::FETCH_ASSOC);
    if(!$row) {
        echo 'false';
    }else if ($row['passwd']== $_POST['passwd']) {
        echo 'true';
    }
    else { echo 'wrong';}
}
catch (PDOException $e) {
    echo 'PDO Exception Caught. ';
    echo 'Error with the database:<br/>';
    echo 'SQL Query: ', $sql;
    echo 'Error: ' . $e->getMessage();
}
?>
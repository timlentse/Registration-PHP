<?php
/**
This part is used for validating if email already existed.
*/
  
//load database info
require_once("dbinfo.php");

//create a PDO object
$dbh    = new PDO($dsn, $user, $passwd);
$dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$dbh->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);
try {
    $sql  = "SELECT id from account WHERE id =:id";
    $stmt = $dbh->prepare($sql);
    $stmt->execute(array(
        ':id' => $_GET['id']
    ));
    if ($stmt->fetch(PDO::FETCH_ASSOC)) {
        echo 'false';
    } else {
        echo 'true';
    }
}
catch (PDOException $e) {
    echo 'PDO Exception Caught. ';
    echo 'Error with the database:<br/>';
    echo 'SQL Query: ', $sql;
    echo 'Error: ' . $e->getMessage();
}
?>
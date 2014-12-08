<?php
/**
 @This part is used for insert registration data into database
*/

//load database info
require_once("dbinfo.php");

try {
    $dbh = new PDO($dsn, $user, $passwd);
    $dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $dbh->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);
    $sql  = "INSERT INTO account VALUES(:id,:passwd,:tw,:gplus,:fb,:firstname,:lastname,:phone,:address)";
    $stmt = $dbh->prepare($sql);
    var_dump($sql);
    $data = array(
        ':id' => $_POST['id'],
        ':passwd' => $_POST['passwd'],
        ':tw' => $_POST['tw'],
        ':gplus' => $_POST['gplus'],
        ':fb' => $_POST['fb'],
        ':firstname' => $_POST['firstname'],
        ':lastname' => $_POST['lastname'],
        ':phone' => $_POST['phone'],
        ':address' => $_POST['address']
    );
    $stmt->execute($data);
}
catch (PDOException $e) {
    echo 'PDO Exception Caught. ';
    echo 'Error with the database:<br/>';
    echo 'SQL Query: ', $sql;
    echo 'Error: ' . $e->getMessage();
}
?>
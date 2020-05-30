<?php

    $server = 'localhost';
    $username = 'root';
    $password = 'root';
    $dbName = 'newhoteltest';

    $id= $_POST['id'];

if($id) {
        $conn = new mysqli($server, $username, $password, $dbName);
        if ($conn -> connect_errno) {

            echo $Sconn -> connect_errno;
            return;
        }
        $sql = "
           DELETE
           FROM paganti
           WHERE id = " .  $id;

            $results = $conn -> query($sql);
            $conn -> close();

}

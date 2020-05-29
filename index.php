<?php
//per comunicare con il js
header('Content-Type:  application/json');

    $server = 'localhost';
    $username = 'root';
    $password = 'root';
    $dbName = 'newhoteltest';

    //fornire i 4 dati che ha il phpmyadmin

    $conn = new mysqli($server, $username, $password, $dbName);

    if ($conn -> connect_errno) {

        echo ($conn -> connect_errno);
        return;
    }

    $sql = "
       SELECT  id, name, lastname
       FROM paganti
        " ;

    $results = $conn -> query($sql);

    if   ($results -> num_rows < 1) {
          echo json_encode([]);
          return;
        }
        $res = [ ];

        while ($row = $results -> fetch_assoc()) {

            $res[ ] =  $row ;

        }

       $conn -> close();
       echo json_encode($res);

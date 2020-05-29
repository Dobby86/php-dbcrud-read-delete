<?php
//per comunicare con il js
header('Content-Type:  application/json');

    $server = 'localhost';
    $username = 'root';
    $password = 'root';
    $dbName = 'newhoteltest';

    //fornire i 4 dati che ha il phpmyadmin e  connettersi a questi(scrivere nello stesso ordine)

    $conn = new mysqli($server, $username, $password, $dbName);
//controllino
    if ($conn -> connect_errno) {

        echo $Sconn -> connect_errno;
        return;
    }
//generiamo con un nome a caso(sql)
    $sql = "
       SELECT  id, name, lastname
       FROM paganti
        " ;
//facciamo una query alla connesione, una sorte di funzione che passiamo l argomento sql
    $results = $conn -> query($sql);

    if   ($results -> num_rows < 1) {
          echo json_encode([]);
          return;
        }
        $res = [ ];
//fa il giro per le righe,e restituisce un NUN o Null e si blocca il while(mette a &row tutte le righe risultanti della query )
        while ($row = $results -> fetch_assoc()) {

            $res[ ] =  $row ;

        }

       $conn -> close();
       echo json_encode($res);

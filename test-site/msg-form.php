<?php

/* MS SQL Server */
$serverName = "AlexHomePC\SQLEXPRESS";
$conn_options = array("UID" => "sa",  "PWD" => "sa", "Database" => "test_site_db");

$conn = sqlsrv_connect($serverName, $conn_options);

if( $conn == false )
     {
     echo "Could not connect to DB.\n";
     die ('Error connecting to the SQL Server database.');
     }

     $user_name = $_POST["user_name"];
     $user_email = $_POST["user_email"];
     $user_message = $_POST["user_message"];

$query_users_ins = "INSERT INTO dbo.messages (name, email, message)
    VALUES 
    ('$user_name','$user_email','$user_message')";
$result_users_ins = sqlsrv_query($conn, $query_users_ins) or die('Error querying a MSSQL database');

sqlsrv_close($conn);

echo 'Inserted values are : ' . '<br/>' . $user_name . '<br/>' . $user_email . '<br/>' . $user_message ;                 


?>

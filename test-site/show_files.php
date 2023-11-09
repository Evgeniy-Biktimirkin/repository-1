<?php
 function dataOutput(){
/* MS SQL */
$serverName = "AlexHomePC\SQLEXPRESS";
$conn_options = array("UID" => "sa",  "PWD" => "sa", "Database" => "test_site_db"); //UID - имя пользователя


$conn = sqlsrv_connect($serverName, $conn_options);

if($conn == false )
  {echo "Failed to connect to DB.\n";}

$query_files = "SELECT id, filename, name, surname, dateofpost FROM files FOR JSON PATH"; 
$result = sqlsrv_query($conn, $query_files) or die('Error querying a MSSQL database');

//$filesData = $result;
return array($result);
sqlsrv_close($conn); 
}

 ?>

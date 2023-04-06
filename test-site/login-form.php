<?php


/* MS SQL Server */
$serverName = "AlexHomePC\SQLEXPRESS";
$conn_options = array("UID" => "sa",  "PWD" => "sa", "Database" => "test_site_db");

$conn = sqlsrv_connect($serverName, $conn_options);

if( $conn == false )
     {
     echo "Failed to connect to DB.\n";}

    $user_login = $_POST["user_login"];
    $user_password = $_POST["user_password"];

$query_users_sel = "SELECT registered FROM dbo.users WHERE login = '$user_login' AND password = '$user_password'";
$result_users_sel = sqlsrv_query($conn, $query_users_sel) or die('Error querying a MSSQL database');

if ($result_users_sel > 0){
while($row = sqlsrv_fetch_array ($result_users_sel)) {
    echo " CONGRATULATIONS!! YOU HAVE LOGGED IN AS : " . $user_login . " !!!";}
}
if (!sqlsrv_has_rows($result_users_sel))
{
echo "Incorrect login and/or password";} 

sqlsrv_close($conn);

?>

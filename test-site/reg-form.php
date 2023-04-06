
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
     $user_surname = $_POST["user_surname"];
     $date_of_birth = $_POST["date_of_birth"];
    // $user_sex = $_POST["user_sex"];
     $user_email = $_POST["user_email"];
     $user_login = $_POST["user_login"];
     $user_password = $_POST["user_password"];

$query_users_ins = "INSERT INTO dbo.users (name, surname, dateofbirth, email, login, password)
    VALUES 
    ('$user_name','$user_surname', '$date_of_birth','$user_email','$user_login','$user_password')";
$result_users_ins = sqlsrv_query($conn, $query_users_ins) or die('Error querying a MSSQL database');

sqlsrv_close($conn);

echo 'Inserted values are : ' . '<br/>' . $user_name . '<br/>' . $user_surname . '<br/>' . $date_of_birth . '<br/>' . $user_email . '<br/>' . $user_login . '<br/>' . $user_password;                 
?>







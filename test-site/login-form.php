<?php
/* $lIn = 0; */

/* MS SQL */
$serverName = "AlexHomePC\SQLEXPRESS";
$conn_options = array("UID" => "sa",  "PWD" => "sa", "Database" => "test_site_db"); //UID - имя пользователя

$conn = sqlsrv_connect($serverName, $conn_options);

if($conn == false )
    {echo "Failed to connect to DB.\n";}

$user_login = $_POST["user_login"];
$user_password = hash('snefru', $_POST["user_password"]); //такое же, как в регистрации

$query_users_sel = "SELECT registered FROM users WHERE login = '$user_login' AND password = '$user_password'"; //registered почти у всех в БД = 1, этот столбец для удобства
$result_users_sel = sqlsrv_query($conn, $query_users_sel) or die('Error querying a MSSQL database'); //на случай, если где-то ошибся в плане БД

if ($result_users_sel > 0){ //если ЕСТЬ зарег-ный с такими логином + паролем, то
while($row = sqlsrv_fetch_array ($result_users_sel)) {
    echo " CONGRATULATIONS! YOU LOGGED IN AS : " . $user_login . " !";
    /* $lIn = 1; */
    $time = 60*60*24;
    $user_cookie = setcookie('login', $user_login, time()+$time, '/'); //создаём куки
    setcookie('password', $user_password, time()+$time, '/'); //неважно, какой алгоритм хеширования
    echo '<script>setTimeout(function(){document.location.href = "/index.html"}, 3500)</script>';
}
}
if (!sqlsrv_has_rows($result_users_sel)) //если НЕ нашлось строки с такими login + password
{
    echo " Incorrect login and/or password";
    /* $lIn = 0;*/
    setcookie('login', $user_login, time()-3600, '/'); //удаляем соответствующие куки
    setcookie('password', $user_password, time()-3600, '/'); //неважно, какой алгоритм хеширования
    echo '<script>setTimeout(function(){document.location.href = "/index.html"}, 3500)</script>';
}


sqlsrv_close($conn);

?>


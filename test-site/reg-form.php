
<?php  

// MS SQL 
$serverName = "AlexHomePC\SQLEXPRESS";
$conn_options = array("UID" => "sa",  "PWD" => "sa", "Database" => "test_site_db"); //UID - имя пользователя

$conn = sqlsrv_connect($serverName, $conn_options);

if( $conn == false )
    {
    echo " Could not connect to DB.\n";//если не получилось соединиться
    }
    if(!empty($_POST["user_name"]) && ($_POST["user_name"] != ' ')){ //
        $user_name = $_POST["user_name"];
    } else {echo ' Field "name" cannot be empty.';} //проверка, чтобы хоть что-то вписали. Доп.проверки есть в СУБД и html

    if(!empty($_POST["user_surname"]) && ($_POST["user_surname"] != ' ')){
        $user_surname = $_POST["user_surname"]; 
    } else {echo ' Surname is needed for authors and convinience of administrator. Here and after you can use your pseudonym if you like.';}

    if(!empty($_POST["date_of_birth"]) && ($_POST["date_of_birth"] != ' ')){
        $date_of_birth = $_POST["date_of_birth"];
    } else {echo ' Field "date of birth" cannot be empty.';} //доп.проверки есть в СУБД и js
    
    // $user_sex = $_POST["user_sex"]; -- пол прикрутил бы только для сбора статистики, но тогда понадобилась бы защита от "шутников"

    if(!empty($_POST["user_email"]) && ($_POST["user_email"] != ' ')){
        $user_email = $_POST["user_email"];
    } else {echo ' Field "email" cannot be empty.';} 

    if(!empty($_POST["user_login"]) && ($_POST["user_login"] != ' ')){
        $user_login = $_POST["user_login"];
    } else {echo ' Field "login" cannot be empty.';} 

    if(!empty($_POST["user_password"]) && ($_POST["user_password"] != ' ')){
        $user_password = hash('snefru', $_POST["user_password"]); //соответственно, в логине такую же
    } else {echo ' Field "password" cannot be empty.';}

$query_users_sel_1 = "SELECT registered FROM users WHERE email = '$user_email'";
$result_users_sel_1 = sqlsrv_query($conn, $query_users_sel_1)
    or die(' Error querying a MSSQL database SELECTing EMAIL. <br/> Please return to the page and try again.'); //на случай, если что-то неправильно здесь написал

if ($result_users_sel_1 > 0){ //сначала проверяем, есть ли уже такой емеил
    while($row = sqlsrv_fetch_array ($result_users_sel_1)) {
        echo " User with email " . $user_email . " already exists. ";
        echo '<script>setTimeout(function(){document.location.href = "/index.html"}, 5000)</script>'; //если такой емеил есть - выходим
    }
    }// else{echo ' 1 if не сработал';}

if (!sqlsrv_has_rows($result_users_sel_1)){ //если такого емеила нет, проверяем логин

    $query_users_sel_2 = "SELECT registered FROM users WHERE login = '$user_login'";
    $result_users_sel_2 = sqlsrv_query($conn, $query_users_sel_2)
        or die(' Error querying a MSSQL database SELECTing LOGIN. <br/> Please return to the page and try again.');
        
    if ($result_users_sel_2 > 0){ //если такой логин есть - выходим
        while($row = sqlsrv_fetch_array ($result_users_sel_2)) {
            echo " User with login " . $user_login . " already exists. ";
            echo '<script>setTimeout(function(){document.location.href = "/index.html"}, 5000)</script>'; //дадим подумать довольно долго
        }
        }
    if (!sqlsrv_has_rows($result_users_sel_2)){ //если ни емеила, ни логина нет, инсертим в БД введённые данные(создаём юзера)
        $query_users_ins = "INSERT INTO users (name, surname, dateofbirth, email, login, password)
            VALUES
            ('$user_name','$user_surname', '$date_of_birth','$user_email','$user_login','$user_password')";//возможно, придётся поменять кодировку для имён и фамилий кириллицей. Пароль уже захеширован.
        $result_users_ins = sqlsrv_query($conn, $query_users_ins)
            or die(' Error occured during INSERT user data INTO MSSQL database. <br/> Please return to the page and try again.');

        sqlsrv_close($conn);

        echo ' CONGRATULATIONS!! YOU HAVE REGISTERED ON THIS SITE WITH VALUES : ' . '<br/>' . $user_name . '<br/>' . $user_surname . '<br/>' . $date_of_birth . '<br/>' . $user_email . '<br/>' . $user_login; //приятно увидеть плоды стараний
        echo '<script>setTimeout(function(){document.location.href = "/index.html"}, 5000)</script>';
        }
        // else  {echo ' 4 if не сработал';}
    } // else {echo ' 2 if не сработал'; }
    
?>







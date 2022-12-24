<?php
if((isset($_POST["user_name"])) && (!empty($_POST["user_name"]))) {
  /*   */
    $user_name = $_POST["user_name"];
}
if((isset($_POST["user_email"])) && (!empty($_POST["user_email"]))) {
  /*   */
    $user_email = $_POST["user_email"];
}
if((isset($_POST["user_message"])) && (!empty($_POST["user_message"]))) {
  /*  */
    $user_message = $_POST["user_message"];
}
$msg_rcvd_arr = [
  "user" => $user_name,
  "e-mail" => $user_email,
  "user_message" => $user_message,
];

echo "<pre>";
var_export($msg_rcvd_arr);
echo "</pre>";

/* echo "Имя: $user_name </br> e-mail: $user_email </br> Сообщение: $user_message"; */
?>


<?php

if(empty($_FILES)) { 
        echo " There's no file to upload";
}

$max_text_size = 2*1024*1024;

$filename = $_FILES["userfile"]["tmp_name"];
$filesize = filesize($filename);
if ($filesize > $max_text_size) {echo " This file is bigger than 2MB. Please do it smaller and try again.";
        echo '<script>setTimeout(function(){
                document.location.href = "/user_works.html"}, 3500);</script>';}


//ЭТОТ ВАРИАНТ ПРО ИСПОЛЬЗОВАНИЕ БАЗЫ ДАННЫХ















//НИЖЕ ВАРИАНТ С СОЗДАНИЕМ БЕСПОЛЕЗНОЙ ДИРЕКТОРИИ И КОПИРОВАНИЕМ ФАЙЛОВ В ПАПКУ \uploads
/* $username = get_current_user();
$uploaddir = "./uploads/" . $username;
if(!is_dir($uploaddir)){
        $uploaddir = mkdir("./uploads/" . $username, 0777);//точка вначале не даёт кинуть в C:\, точка в конце добавляет в имя точку(поэтому её нет)
        $file_upload = move_uploaded_file($_FILES["userfile"]["tmp_name"], "./uploads//" . $username . "_" .
        ($_FILES["userfile"]["name"])); //название почти то же
        echo " Пошло по ветке ДИРЕКТОРИИ НЕТ"; 
}else{
        $file_upload = move_uploaded_file($_FILES["userfile"]["tmp_name"], "./uploads//" . $username . "_" .
        ($_FILES["userfile"]["name"])); //название почти то же
        echo " Пошло по ветке ДИРЕКТОРИЯ СУЩЕСТВУЕТ!";
} */



if($file_upload){
        print "<br/> File was uploaded!";
        /* echo '<script>setTimeout(function(){
                document.location.href = "/user_works.html"}, 5500);</script>'; */
} else {
        print "<br/> Error occured during uploading";
        /* echo '<script>setTimeout(function(){
                document.location.href = "/user_works.html"}, 5500);</script>'; */
}

?>
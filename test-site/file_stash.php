
<?php

$uploaddir = "/uploads"; // каталог, куда кидается файл
if(move_uploaded_file($_FILES["userfile"]["tmp_name"], // "tmp_name" - временный файл из формы, пришедшей посредством JS 
    $uploaddir . $_FILES["userfile"]["name"])){ // "name" - новый файл
        print "File was uploaded!";
} else {
        print "Error occured during uploading";
}

?>
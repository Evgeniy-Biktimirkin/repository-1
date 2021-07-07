
Функционал данной задачи поместился в 3 небольших функции. Код javaScript:
$(function() {
  $(".button-em").on("click", validate);
  
  // Validate email
  function validateEmail(email) {
    var re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    return re.test(String(email).toLowerCase());
  }
   
  // send form
  function sendForm() {
    $(".error").text("Form sending").fadeIn();
  }
 
  // validate email and send form after success validation
  function validate() {
    var email = $(".email").val();
    var $error = $(".error");
    $error.text("");
 
    if (validateEmail(email)) {
      $error.fadeOut();
      sendForm();
    } else {
      $error.fadeIn();
      $error.text(email + " is not valid");
    }
    return false;
  }



  
  function message() {
    document.getElementById('msg').action = 
      "mailto:e.biktimirkin@yandex.ru?subject=Question from website"
      + '&Body=' + document.getElementById('msg').value;
    return false;
    }

});
/* ВАЛИДАЦИЯ и так в HTML уже есть и сводится к 1 паттерну

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
  
  function validate() {
    const $result = $("#result");
    const email = $("#email").val();
    $result.text("");
  
    if (validateEmail(email)) {
      $result.text(email + " is valid ");
      $result.css("color", "green");
    } else {
      $result.text(email + " is not valid");
      $result.css("color", "red");
    }
    return false;
  }

 */

  function sendMail() {   //походу, без ввода доп.функции никак
    var link = // нужна переменная для хранения массива из предписаний (полей) и значения элемента по id
      `mailto:e.biktimirkin@yandex.ru?subject=Question from website&Body=${document.getElementById("msg").value}`;
      // тут и $ и .value и общие кавычки необходимы 
      window.location.href = link // открыть новое окно по указанной выше ссылке
    return false;   // ничего не делать, если не получилось
    }
    

    
   /* скрипт запустится только при клике на определённые рассказы/отрывки романов
  
   function ageValid(birthday, today) {
      var today = new Date(now.getFullYear(), born.getMonth(), born.getDate()); 
      var birthday = new Date();
    }       */


  
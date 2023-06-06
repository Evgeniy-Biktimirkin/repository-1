
var butLogin = document.querySelector("#button_login");
var butLogout = document.querySelector("#button_logout");
var formReg = document.querySelector(".form-reg");
var pswd = document.querySelector("#pswd_reg");
var repeatPswd = document.querySelector("#repeat_password");
var DOB = document.querySelector("#date_of_birth");

var logInput = document.querySelector("#log_log");
var pswInput = document.querySelector("#pswd_log");

var logLabel = document.querySelector("#log_lbl");
var pwdLabel = document.querySelector("#pwd_lbl");

var forumLink = document.querySelector("#forum_link");
var userWorksLink = document.querySelector("#user_works");

function loginClick(){//функция нажатия на кнопку Логин(вызывает все соответствующие последствия)
  var loginFDelay = setTimeout(//чтобы выполнился таймер, задаём функцию в переменную
    loggedIn(), 600);
  butLogin.addEventListener("onclick", loginFDelay());
}

function logoutClick(){ //функция восстановления кнопки, строк и формы для логина
  logInput.style.display = "inline-block";
  pswInput.style.display = "inline-block";
  logLabel.style.display = "inline-block";
  pwdLabel.style.display = "inline-block";

  butLogin.style.display = "inline-block";
  formReg.style.display = "inline-block";
  userWorksLink.style.display = "none";
  forumLink.style.display = "none";

  butLogout.style.display = "none";

  var cookie_date = new Date();
  document.cookie = "password=; expires=" + cookie_date.toLocaleTimeString(-1);//удалить куки при закрытии браузера
}

function get_cookie(cookie_name){
  var results = document.cookie.match ('(^|;) ?' + cookie_name + '=([^;]*)(;|$)'); //ищет, есть ли куки с нашим названием
  if (results){
    return (results[2]);}
  else
    {return;}
}
var cooPVerif = get_cookie ("password");//интересует только сохранившийся пароль


function loggedIn(){ //страница выглядит залогиненной только если есть куки
  if (cooPVerif != null){
  logInput.style.display = "none";
  pswInput.style.display = "none";
  logLabel.style.display = "none";
  pwdLabel.style.display = "none";

  butLogin.style.display = "none"; 
  formReg.style.display = "none";
  userWorksLink.style.display = "inline-block";
  forumLink.style.display = "inline-block";

  butLogout.style.display = "inline-block";
  }
}

loggedIn(); //для принудительной проверки наличия куки


function repeatPassword(){ //чтобы появлялось сообщение, если пароли в окне рег-ции не совпадают
  if(pswd.value != repeatPswd.value) {
    repeatPswd.setCustomValidity("Passwords don't match");
  } else {
    repeatPswd.setCustomValidity('');
  }
}
pswd.onchange = repeatPassword; //и при изменении пароля ...
repeatPswd.onkeyup = repeatPassword; //и при вводе в Повторении активируется


DOB.onchange = function ageValid() {
  var DOBStr = document.querySelector("#date_of_birth").value; //выбранная юзером в календарике
  var DOBObj = new Date(DOBStr); //дата-объект из строки, выбранный

  var sysD = new Date(); //сис.дата-объект
  var year2006 = sysD.getFullYear() - 16; //наш год -16 лет
  var month2006 = sysD.getMonth();
  var date2006 = sysD.getDate();
  var prehDObj = new Date(year2006, month2006, date2006); //дата-объект -16 лет

  if (DOBObj > prehDObj){
    alert('Reader should be 16 years old at least.');
    document.querySelector("#date_of_birth").value = null; //DOBStr не обнулял, пришлось целиком
    return; //возврат к началу функции
  } else {
    false; //если юзер взрослый - оставляем его дату
  }
}



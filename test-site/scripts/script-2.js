//НИЧЕГО НЕ ТРОГАЙ!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//НЕ СЛОМАНО - НЕ ЧИНИ!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

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

var fLink = document.querySelector("#forum_link");

function loginClick(){ //для сравнения с массивом допустимых пар: логин-пароль
  var loginVal = document.querySelector("#log_log").value;
  var passwordVal = document.querySelector("#pswd_log").value;

  var accessFlds = [
    {lgn:"Alec", pwd:"A1c4sh"},
    {lgn:"Fedr", pwd:"F1br3"}
  ];
  accessFlds.forEach(function(row){
    if((loginVal == row.lgn) && (passwordVal == row.pwd)){
      var loginFDelay = setTimeout(() => { //чтобы выполнился таймер, задаём функцию в переменную
        loginFade()}, 400);
      butLogin.addEventListener("onclick", loginFDelay());
      //butLogin.addEventListener("onclick", loginFade()); //мгновенный вызов. Только при совпадении пар: логин-пароль
      linksApear();
    } else
    {return;}
  })
}

function loginFade(){ //функция мгновенного убирания кнопки, строк и формы для логина 
  logInput.style.display = "none";
  pswInput.style.display = "none";
  logLabel.style.display = "none";
  pwdLabel.style.display = "none";

  butLogin.style.display = "none";
  formReg.style.display = "none";
  fLink.style.display = "none";
  /* СПРЯТАТЬ ССЫЛКУ ПОСТА РАССКАЗОВ ЮЗЕРА */
  butLogout.style.display = "inline-block"
}


function loginAppear(){ //функция восстановления кнопки, строк и формы для логина
  logInput.style.display = "inline-block";
  pswInput.style.display = "inline-block";
  logLabel.style.display = "inline-block";
  pwdLabel.style.display = "inline-block";

  butLogin.style.display = "inline-block";
  formReg.style.display = "inline-block";
  fLink.style.display = "inline-block";
  butLogout.style.display = "none"
}

function linksApear (){
  if (lIn = 1){
    fLink.style.display = "inline-block";
    /* ДОБАВИТЬ ССЫЛКУ ФОРУМА */

    }
    else
      /* ЕСЛИ НАЖАЛИ ЛОГАУТ */
    {
      fLink.style.display = "none";
      /* СПРЯТАТЬ ССЫЛКУ ФОРУМА */

    }
}




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
  var DOBObj = new Date(DOBStr); //дата из строки

  var sysD = new Date(); //сис.дата
  var year2006 = sysD.getFullYear() - 16; //наш год -16 лет
  var month2006 = sysD.getMonth();
  var date2006 = sysD.getDate();
  var prehDObj = new Date(year2006, month2006, date2006); //дата -16 лет

  if (DOBObj > prehDObj){
    alert('Reader should be 16 years old at least');
    document.querySelector("#date_of_birth").value = null; //DOBStr не обнулял, пришлось целиком
    return; //возврат к началу функции
  } else {
    false; //если юзер взрослый - оставляем его дату
  }
}



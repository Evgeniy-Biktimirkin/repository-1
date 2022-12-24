var butLogin = document.querySelector("#button_login");
var butLogout = document.querySelector("#button_logout");
var formReg = document.querySelector(".form-reg");
var pswd = document.querySelector("#pswd_reg");
var repeatPswd = document.querySelector("#repeat_password");
var DOB = document.querySelector("#date_of_birth");

function loginClick(){ //для сравнения с диапазоном валидности длины логина и пароля
  var logLog = document.querySelector("#log_log").value.length;
  var pswdLog = document.querySelector("#pswd_log").value.length;

  if ( (4 <= logLog && logLog <= 16) && (5 <= pswdLog && pswdLog <= 16) ){
    butLogin.addEventListener("onclick", loginFade()); //вызывает только, если нужной длины
 } else
 {return;}
}
function loginFade(){ //сама функция убирания кнопки и формы 
  butLogout.style.display = "none";
  formReg.style.display = "none";
}

function repeatPassword(){ //чтобы появлялось сообщение, если пароли не совпадают
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


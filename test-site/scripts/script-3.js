
// Домашний вариант
var uploadForm = document.querySelector("#upload-form");//элем.формы

function uploadFile(ev) {

  var areaOutput = document.querySelector("#area61");
  var myUploadForm = new FormData(uploadForm);//объект формо-данных формы

  var request1 = new XMLHttpRequest();//название запроса
  request1.open("POST", "file_stash.php", true);//запрос-обращение 
  request1.onload = function(ev) {//уточнение, что делать по загрузке 
    if (request1.status == 200) {
      areaOutput.innerHTML = "File uploaded!";
    } else {
      areaOutput.innerHTML = `Error ${request1.status} occurred when trying to upload your file.<br \/>`;
    }
  };
  request1.send(myUploadForm);//посыл запроса 
  ev.preventDefault();
};

uploadForm.addEventListener('submit', uploadFile, false);



// ЗАПАСНОЙ БЕДНЫЙ ВАРИАНТ  ===========================================================================

/*var uploadForm = document.querySelector("#upload-form");//элем.формы

var myUploadForm = new FormData(uploadForm);//объект формо-данных формы

 myUploadForm.append("username", "Groucho");
myUploadForm.append("accountnum", 123456);  // число 123456 немедленно преобразуется в строку "123456"

 // Файл, выбранный пользователем (если захочется что-то добавить)
myUploadForm.append("userfile", fileInputElement.files[0]);

// JavaScript Blob объект(если захочется что-то добавить)
var content = '<a id="a"><b id="b">hey!</b></a>'; // содержимое нового файла...
var blob = new Blob([content], { type: "text/xml"});

myUploadForm.append("webmasterfile", blob); 
myUploadForm.append("serialnumber", serialNumber++);

var request1 = new XMLHttpRequest();
request1.open("POST", "http://foo.com/submitform.php");
request1.send(myUploadForm);*/

//  КАК БЫЛО  ==========================================================================

/* var uploadForm = document.querySelector("#upload-form");//элем.формы
uploadForm.addEventListener('submit', function(ev) {

    var areaOutput = document.querySelector("area61");
    var myUploadForm = new FormData(uploadForm);//объект формо-данных формы
  
    myUploadForm.append("number", serialNumber++);
  
    var request1 = new XMLHttpRequest();
    request1.open("POST", "file_stash.php", true);
    request1.onload = function(ev) {
      if (request1.status == 200) {
        areaOutput.innerHTML = "File uploaded!";
      } else {
        areaOutput.innerHTML = "Error " + request1.status + " occurred when trying to upload your file.<br \/>";
      }
    };
  
    request1.send(myUploadForm);
    ev.preventDefault();
}, false); */


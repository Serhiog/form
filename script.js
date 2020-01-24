//                                                       Вариант 1 -------------------->

// function valid() {
//   var name = document.getElementById("name");
//   var surname = document.getElementById("surname");
//   var pass1 = document.getElementById("pass1");
//   var pass2 = document.getElementById("pass2");

//   if (!name.value) {
//     name.style.border = "2px solid red";
//     alert("Имя не указано");
//     return false;
//   } else {
//     name.style.border = "2px solid green";
//   }

//   if (!surname.value) {
//     surname.style.border = "2px solid red";
//     alert("Фамилия не указана");
//     return false;
//   } else {
//     surname.style.border = "2px solid green";
//   }

//   if (!otc.value) {
//     otc.style.border = "2px solid red";
//     alert("Отчество не указано");
//     return false;
//   } else {
//     otc.style.board = "2px solid green";
//   }

//   if (pass2.value != pass1.value || !pass2.value || !pass1.value) {
//     alert("Введенные пароли не совпадают или не указаны !");
//     return false;
//   } else {
//     window.location = "http:/ya.ru";
//   }

//   return true;
// }
//                                                        Вариант 2 -------------------->
// function valid() {
//   var name = document.getElementById("name");
//   var surname = document.getElementById("surname");
//   var pass1 = document.getElementById("pass1");
//   var pass2 = document.getElementById("pass2");
//
//   if (
//     !name ||
//     !name.value ||
//     name.value === " " ||
//     !surname ||
//     !surname.value ||
//     surname.value === " "
//   ) {
//     (name.style.border = "2px solid red") ||
//       (surname.style.border = "2px solid red");
//     alert("Вы не ввели данные");
//     return false;
//   } else {
//     (name.style.border = "2px solid green") ||
//       (surname.style.border = "2px solid green");
//     return true;
//   }
// }
//                                                         Часть добавляющая изминения на клик по кнопке-------------------------
//

function valid() {
  var name = document.getElementById("name");
  var surname = document.getElementById("surname");
  var oche = document.getElementById("oche");
  var date = document.getElementById("date");
  var pass1 = document.getElementById("pass1");
  var pass2 = document.getElementById("pass2");
  var field = document.getElementById("field");

  if (
    (!name || !name.value || name.value === " ",
    !surname || !surname.value || surname.value === " ",
    !oche || !oche.value || oche.value === " ",
    !date || !date.value || date.value === " ",
    !pass1 || !pass1.value || pass1.value === " ",
    !pass2 || !pass2.value || pass2.value === " ")
  ) {
    alert("Данные не введены") & (field.style.border = "5px solid red");
  } else {
    alert("Данные введены ") & (field.style.border = "5px solid green");
  }
  if (pass2.value !== pass1.value) {
    alert("Введенные пароли не совпадают !");
  }
  return false;
}

document.getElementById("button").onfocus = function changeContent() {
  document.getElementById("button").innerHTML = "Успешно !";
  document.getElementById("button").style =
    "Color: black; font-weight: bold; background: lightblue";
};

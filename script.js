function valid() {
  var name = document.getElementById("name");
  var surname = document.getElementById("surname");
  var pass1 = document.getElementById("pass1");
  var pass2 = document.getElementById("pass2");

  if (!name.value) {
    name.style.border = "2px solid red";
    alert("Имя не указано");
    return false;
  } else {
    name.style.border = "2px solid green";
  }

  if (!surname.value) {
    surname.style.border = "2px solid red";
    alert("Фамилия не указана");
    return false;
  } else {
    surname.style.border = "2px solid green";
  }

  if (!otc.value) {
    otc.style.border = "2px solid red";
    alert("Отчество не указано");
    return false;
  } else {
    otc.style.board = "2px solid green";
  }

  if (pass2.value != pass1.value) {
    alert("Введенные пароли не совпадают");
    return false;
  }

  return true;
}

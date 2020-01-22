function valid() {
  var name = document.getElementById("name");
  var surname = document.getElementById("surname");

  if (!name.value) {
    name.style.border = "2px solid red";
    return false;
  } else {
    name.style.border = "2px solid green";
  }

  if (!surname.value) {
    surname.style.border = "2px solid red";
    return false;
  } else {
    surname.style.border = "2px solid green";
  }

  return true;
}

var otc = (document.getElementById("otc").onclick = function () {
  console.log("Hello");
});

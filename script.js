
const MIN_LENGTH = 4;
const MAX_LENGHT = 10;

const form = document.querySelector('.content__form');
const name = form.querySelector('#name');
const surName = form.querySelector('#surname');
const tel = form.querySelector('#tel');
const email = form.querySelector('#email');
const login = form.querySelector('#login');
const password = form.querySelector('#password');
const rePassword = form.querySelector('#repassword');
const errorText = document.querySelector('.content__error-info')
const errorImg = document.querySelector('.content__error-img')

const checkInvalid = (evt) => {
  const valueLength = name.value.length;

  if (valueLength < MIN_LENGTH) {
    evt.target.setCustomValidity('Пожалуйста, укажите Ваши данные полностью чтобы наш менеджер смог связаться с Вами')
    errorText.textContent = 'Пожалуйста, укажите Ваши данные полностью чтобы наш менеджер смог связаться с Вами';
    errorImg.style.display = 'block';
  } else if (valueLength > MAX_LENGHT) {
    evt.target.setCustomValidity('Пожалуйста, укажите Ваше имя корректно чтобы наш менеджер смог связаться с Вами')
  } else if (valueLength.length === 0) {
    evt.target.setCustomValidity('Пожалуйста, заполните это поле')
  } else {
    evt.target.setCustomValidity('')
    errorText.textContent = '';
    errorImg.style.display = 'none';
  }
};


const checkInput = (evt) => {
  const valueLength = evt.target.value.length;

  if (!isNaN(evt.data)) {
    evt.target.value = ''
    errorText.textContent = 'Пожалуйста, заполните данные текстом';
    errorImg.style.display = 'block';
  }
  else if (isNaN(evt.data)) {
    errorText.textContent = '';
    errorImg.style.display = 'none';
    if (valueLength < MIN_LENGTH || valueLength > MAX_LENGHT) {
      evt.target.style.border = '1px solid red';
    }
    else if (valueLength > MIN_LENGTH || valueLength < MAX_LENGHT) {
      evt.target.style.border = '1px solid green';
    }
  }


  else {
    evt.target.setCustomValidity('');
    errorText.textContent = '';
    errorImg.style.display = 'none';
  }
}

const checkPassword = () => {
  const userPass = password.value;
  const userRePass = rePassword.value;
  if (userPass === userRePass) {
    password.style.border = '1px solid green';
    rePassword.style.border = '1px solid green';
  }
  else {
    password.style.border = '1px solid red';
    rePassword.style.border = '1px solid red';
  }
}

const checkInputTel = (evt) => {
  const valueLength = evt.target.value.length;

  if (isNaN(evt.target.value)) {
    evt.target.value = ''
    errorText.textContent = 'Пожалуйста, заполните номер телефона цифрами';
    errorImg.style.display = 'block';
  }


  else if (!isNaN(evt.target.value)) {
    errorText.textContent = '';
    errorImg.style.display = 'none';
    if (valueLength < MIN_LENGTH || valueLength > MAX_LENGHT) {
      evt.target.style.border = '1px solid red';
    }
    else if (valueLength > MIN_LENGTH || valueLength < MAX_LENGHT) {
      evt.target.style.border = '1px solid green';
    }
  }


  else {
    evt.target.setCustomValidity('');
    errorText.textContent = '';
    errorImg.style.display = 'none';
  }
}

name.addEventListener('invalid', checkInvalid);
name.addEventListener('input', checkInput);
surName.addEventListener('invalid', checkInvalid);
surName.addEventListener('input', checkInput);
tel.addEventListener('invalid', checkInvalid);
tel.addEventListener('input', checkInputTel);
email.addEventListener('invalid', checkInvalid);
email.addEventListener('input', checkInput);
login.addEventListener('invalid', checkInvalid);
login.addEventListener('input', checkInput);

password.addEventListener('input', checkPassword);
rePassword.addEventListener('input', checkPassword);
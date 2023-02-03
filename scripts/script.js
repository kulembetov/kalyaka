// Отмена отправки формы

const form = document.querySelector("#form");
const formName = document.querySelector(".form__input-name");
const formEmail = document.querySelector(".form__input-email");
const formMessages = document.querySelector(".form__input-message");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  formName.value = "";
  formEmail.value = "";
  formMessages.value = "";
});

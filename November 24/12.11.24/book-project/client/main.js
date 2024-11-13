import { createUser } from "./js files/userController.js";

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const ageInput = document.getElementById("age");

const elformSignUp = document.querySelector("#form-sign-up");

elformSignUp.addEventListener("submit", (ev) => {
  ev.preventDefault();
  createUser(
    nameInput.value,
    emailInput.value,
    passwordInput.value,
    ageInput.value
  );
});

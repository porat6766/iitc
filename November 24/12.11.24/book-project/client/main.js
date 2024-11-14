import { createUser, loginUser } from "./js files/userController.js";

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const ageInput = document.getElementById("age");

const elformSignUp = document.querySelector("#form-sign-up");

const elformSignIn = document.querySelector("#form-sign-in");

if (elformSignUp) {
  elformSignUp.addEventListener("submit", async (ev) => {
    ev.preventDefault();
    const create = await createUser(
      nameInput.value,
      emailInput.value,
      passwordInput.value,
      ageInput.value
    );
    console.log(create);

    if (create) {
      window.location.href = "./html files/log-in.html";
    } else {
      alert("please try later");
    }
  });
}

if (elformSignIn) {
  elformSignIn.addEventListener("submit", async (ev) => {
    ev.preventDefault();
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const log = await loginUser(emailInput.value, passwordInput.value);
    if (!log) {
      return alert("Please verify your details again");
    }
    window.location.href = "./html files/books.html";
  });
}

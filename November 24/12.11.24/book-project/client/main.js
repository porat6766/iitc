import { createUser, loginUser } from "./js files/userController.js";
import book from "./js files/books.js";

const elBookUlAll = document.querySelector(".book-ul-all");

const elBookUlMy = document.querySelector(".book-ul-my");

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
      window.location.href = "./html_files/log-in.html";
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
    } else {
      window.location.href = "/html_files/books.html";
    }
  });
}

if (elBookUlAll) {
  book.getAllBooks().then((res) => {
    book.renderBooks(res, elBookUlAll);
  });
}

const getCookie = (name) => {
  const cookies = document.cookie.split("; ");
  for (const cookie of cookies) {
    const [key, value] = cookie.split("=");
    if (key === name) return value;
  }
  return null;
};

if (elBookUlMy) {
  const token = getCookie("token");
  book.getMyBooks(token).then((res) => {
    console.log(res);
    book.renderBooks(res, elBookUlMy);
  });
}

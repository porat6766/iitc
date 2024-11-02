const elForm = document.querySelector(".form");
console.log(elForm);

const elinput = document.querySelector(".input");
const elButton = document.querySelector(".button");
const elimgDuck = document.querySelector(".img-duck");

elForm.addEventListener("submit", function (ev) {
  ev.preventDefault();
  const formObject = new FormData(elForm);
  const representformObject = Object.fromEntries(formObject);
  console.log(representformObject);
  formFunction(representformObject);
});

function formFunction(obj) {
  const url = `https://random-d.uk/api/v2/${obj.number}.jpg`;
  elimgDuck.src = url;
  elimgDuck.style.border = "2px solid black";
}

/// proxyUrl = "http://corsproxy.io/?"

const elulList = document;

//
//
//
//
//
let colorChangeID = document.getElementById("content");
colorChangeID.style.backgroundColor = "lightblue";
colorChangeID.style.color = "red";

//
//
let addUl = document.querySelectorAll("li");
for (let i = 0; i < addUl.length; i++) {
  const print = addUl[i].textContent;
  console.log(print);
}

//
//
//
const changeColor = document.getElementById("list");
const myBtn = document.getElementById("button");
let elementCheckColor = 0;
myBtn.addEventListener("click", () => {
  if (elementCheckColor === 0) {
    changeColor.style.backgroundColor = "yellow";
    elementCheckColor = 1;
  } else if (elementCheckColor === 1) {
    changeColor.style.backgroundColor = "red";
    elementCheckColor = 2;
  } else if (elementCheckColor === 2) {
    changeColor.style.backgroundColor = "";
    elementCheckColor = 0;
  }
});

//2//

// const ulDad = document.querySelector(".list-two");
// const button2 = document.querySelector(".button-two");
// button2.addEventListener("click", additem);
// function additem() {
//   const li = document.createElement("li");
//   li.textContent = "NEW-ITEM";
//   ulDad.appendChild(li);
//   li.addEventListener("click", addID);
//   function addID() {
//     li.id = "selected";
//   }
// }

const UL = document.querySelector(".list-two");
const button5 = document.querySelector(".button-two");
button5.addEventListener("click", addItem);
let x = 1;
function addItem() {
  const li = document.createElement("li");
  li.textContent = `hello i am new items ${x}`;
  x++;
  UL.appendChild(li);
  li.addEventListener("click", addClass);
  function addClass() {
    li.id = "selected";
  }
}
const _removeFirstItemButton = document.getElementById(
  "remove-first-item-button"
);
_removeFirstItemButton.addEventListener("click", removeFirstChild);
function removeFirstChild() {
  if (UL.children[0]) UL.removeChild(UL.children[0]);
}

//

const _removelastItemButton = document.getElementById(
  "remove-last-item-button"
);
_removelastItemButton.addEventListener("click", removeLastItem);
function removeLastItem() {
  if (UL.children[UL.children.length - 1]) {
    UL.removeChild(UL.children[UL.children.length - 1]);
  }
}

const removeItemSelect = document.getElementById("remove-selected-item-button");
removeItemSelect.addEventListener("click", remoBold);
function remoBold() {
  Array.from(UL.children).forEach((li) => {
    if (li.id === "selected") {
      UL.removeChild(li);
    }
  });
}

//3

// <input type="text" id="nameInput" placeholder="Type name..." />
// <div id="greeting">Hello-champ</div>
// {/* <button id="button-clear">clerar</button> */}

const name_input = document.getElementById("nameInput");
const _greetingId = document.getElementById("greeting");
const _clear_button = document.getElementById("button-clear");

name_input.addEventListener("input", updateName);
_clear_button.addEventListener("click", clearInput);

function updateName() {
  const name = name_input.value;
  if (name.trim() === "") {
    _greetingId.textContent += "CHAMP!";
  } else {
    _greetingId.textContent = `HELLO ${name}!`;
  }
}

function clearInput() {
  let name = name_input.value;
  if (name === "") {
    alert("you need to put something first");
  } else {
    name_input.value = "";
    _greetingId.textContent = "HELLO";
  }
}

//4.
const changeColoro = document.querySelector(".button4");
const divBoxDefult = document.getElementById("box");

changeColoro.addEventListener("click", funChaColor);

divBoxDefult.style.maxHeight = "300px";
divBoxDefult.style.maxWidth = "300px";
divBoxDefult.style.height = "100px";
divBoxDefult.style.width = "100px";
divBoxDefult.style.background = "blue";
let boolean = true;

function getRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

function funChaColor() {
  if (boolean) {
    divBoxDefult.style.background = "red";
    divBoxDefult.style.height = 100 * 4 + "px";
    divBoxDefult.style.width = 100 * 4 + "px";
    divBoxDefult.style.border = "15px solid " + getRandomColor();
  } else {
    divBoxDefult.style.height = "100px";
    divBoxDefult.style.width = "100px";
    divBoxDefult.style.background = "blue";
    divBoxDefult.style.border = "15px solid " + getRandomColor();
  }
  boolean = !boolean;
}

//5.

function showAlert() {
  alert("Button clicked!");
}

const button = document.getElementById("trigger-button");
button.addEventListener("click", showAlert);

function updateMessage() {
  const messageBox = document.querySelector(".message-box");
  messageBox.textContent = "Hello, welcome to the exam project!";
}

updateMessage();

const userList = ["Alice", "Bob", "Charlie"];

const ulElement = document.createElement("ul");
ulElement.classList.add("user-list");

for (let i = 0; i < userList.length; i++) {
  const liElement = document.createElement("li");
  ulElement.appendChild(liElement);
}

document.body.appendChild(ulElement);

const items = document.querySelectorAll("li");

for (let i = 0; i < items.length; i++) {
  items[i].textContent = `Item ${i + 1}`;
}

document
  .getElementById("simple-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const nameInput = document.getElementById("name").value;

    if (nameInput === "") {
      alert("Name is required.");
    } else {
      alert(`Hello, ${nameInput}!`);
    }
  });

const settings = {
  theme: "dark",
  language: "en",
};

// console.log(settings.color);

//37 שאלה א

//39-45

//31-34

//18-27-29

const greet = "hello word";

function capitalizeFirstLetter(val) {
  console.log(val.charAt(0).toUpperCase() + val.slice(1));
}
capitalizeFirstLetter(greet);
lis = [1, 2, 3, 4, 5, 6];

const evenNumber = lis.map((num) => {
  if (num % 2 === 0) {
    return num;
  }
});
console.log(evenNumber);


const array = ["jkhgjfhgd","kjhgjh","khjhg"]
const longestWord = array.reduce(a,b)
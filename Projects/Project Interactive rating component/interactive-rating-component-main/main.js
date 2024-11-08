//get all elements of numbers
const elRates = document.querySelectorAll(".number");
//get submit button
const elsubmit = document.querySelector(".submit");
//varieble that keep number rate
let numberRate;

//get page one
const elPageOne = document.querySelector("#pageOne");
//get page two
const elPagetwo = document.querySelector("#pageTwo");
//get span that represent number-of-choosen
const elnumberOfChoosen = document.querySelector(".number-of-choosen");
//get refresh page
const elRateAgain = document.querySelector(".Rate-again");
//add event listhner to all elNumber
elRates.forEach((el) => {
  el.addEventListener("click", function () {
    choosenAndGivenOrRemoveClass(el);
  });
});

/////ginen/taken class chosen number
function choosenAndGivenOrRemoveClass(el) {
  if (el.classList.contains("choosen-number")) {
    el.classList.remove("choosen-number");
    numberRate = null;
  } else {
    takeClass();
    el.classList.add("choosen-number");
    numberRate = el.textContent;
  }
}

// clean class from all to reset class
function takeClass() {
  elRates.forEach((el) => {
    el.classList.remove("choosen-number");
  });
}

//add event to btn submit
elsubmit.addEventListener("click", submitActions);

//function to do submit
function submitActions() {
  if (numberRate) {
    elPageOne.classList.add("hidden");
    elPagetwo.classList.remove("hidden");
    elnumberOfChoosen.textContent = numberRate;
  } else {
    alert("please rate first😊");
  }
}

elRateAgain.addEventListener("click", reload);
function reload() {
  location.reload();
}

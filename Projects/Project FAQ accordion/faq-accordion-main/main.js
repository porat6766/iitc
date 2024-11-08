const elPlus = document.querySelectorAll(".plus");
const elMinus = document.querySelectorAll(".minus");
const elPar = document.querySelectorAll(".paragaph");

for (let i = 0; i < elPlus.length; i++) {
  let elpl = elPlus[i];
  elpl.addEventListener("click", () => {
    toggleToParaAndPlusAndMinus(i);
  });
}

function toggleToParaAndPlusAndMinus(i) {
  elMinus[i].classList.toggle("hidden");
  elPlus[i].classList.toggle("hidden");
  elPar[i].classList.toggle("hidden");
}

for (let i = 0; i < elMinus.length; i++) {
  let elpl = elMinus[i];
  elpl.addEventListener("click", () => {
    toggleToParaAndPlusAndMinus(i);
  });
}

const formElement = document.querySelector("form");
const containerElement = document.querySelector(".container");
const listBtnElement = document.querySelector("#get-list");
const ulElement = document.getElementById("name-list");

function formSubmit(formObejct) {
  const url = `https://random-d.uk/api/v2/${formObejct.number}.jpg`;
  console.log(url);

  // Insert image

  const imageElement = document.createElement("img");
  if (formObejct.number === "") {
    alert("something went wrong");
  } else {
    imageElement.src = url;
    containerElement.innerHTML = "";
    containerElement.appendChild(imageElement);
  }
}

const renderNames = (namesArray) => {
  namesArray.forEach((name) => {
    const liElement = document.createElement("li");
    const imgElement = document.createElement("img");
    liElement.innerText = name;
    addlistner(liElement, imgElement);
    liElement.appendChild(imgElement);
    ulElement.appendChild(liElement);
  });
};

function addlistner(liElement, imgElement) {
  imgElement.classList.toggle("hidden");
  liElement.addEventListener("click", function () {
    imgElement.classList.toggle("hidden");
    showPhoto(liElement, imgElement);
  });
}

function showPhoto(liElement, imgElement) {
  imgElement.src = `https://random-d.uk/api/v2/${liElement.innerText}.gif`;
}

const getDuckList = () => {
  const proxyUrl = "https://corsproxy.io/?";
  const targetUrl = "https://random-d.uk/api/v2/list";

  fetch(proxyUrl + encodeURIComponent(targetUrl))
    .then((response) => response.json())
    .then((data) => {
      renderNames(data.gifs);
      // console.log(data);
      // console.log(data.gifs);
    })
    .catch((error) => {
      console.error("Error fetching duck list:", error);
    });
};

formElement.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(formElement);
  console.log(formData);
  const formObject = Object.fromEntries(formData);
  console.log(formObject);
  formSubmit(formObject);
});

listBtnElement.addEventListener("click", () => {
  getDuckList();
});

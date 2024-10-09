const eldog = document.querySelector(".dog");

let res = fetch("https://dog.ceo/api/breeds/image/random")
  .then((response) => response.json())
  .then((data) => {
    insert(data.message);
  });

function insert(src) {
  eldog.insertAdjacentHTML("afterbegin", `<img src="${src}">`);
}

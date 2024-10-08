const elcontainerCats = document.querySelector(".container-cats");
let catUrl = fetch("https://api.thecatapi.com/v1/images/search")
  .then((response) => response.json())
  .then((data) => {
    insert(data[0].url);
    // console.log(data.url);
  });

//
function insert(src) {
  elcontainerCats.insertAdjacentHTML("afterbegin", `<img src="${src}">`);
}

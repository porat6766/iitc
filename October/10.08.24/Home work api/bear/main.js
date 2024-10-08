//dont allowed to the img
const elphotoDiv = document.querySelector(".photo-div");
const bear = fetch("https://api.ebird.org/v2/data/obs/{{regionCode}}/recent")
  .then((response) => response.json())
  .then((data) => console.log(data);
  );

function insert(src) {
  elphotoDiv.insertAdjacentText(
    "afterbegin",
    `<img src="${src}" alt="?">
`
  );
}

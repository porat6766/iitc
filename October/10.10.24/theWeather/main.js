// fetch("https://api.openweathermap.org/data/3.0/onecall", {
//   key: "a1aee7d712948726bdcbe4a6568bd4b6",
// })
//   .then((res) => res.json())
//   .then((res) => console.log(res))
//   .catch((err) => console.error("err", err));
// import { data } from "./secret.js";
import { data } from "./secret.js";
fetch(
  `https://api.openweathermap.org/data/2.5/weather?lat=32.0853&lon=34.7818&appid=${data.YOUR_API_KEY}`
)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

    playWithData(data);
  })
  .catch((error) => console.error("Error:", error));

//bring div all
const elDivAll = document.querySelector(".all");
function playWithData(data) {
  const elLi = document.createElement("li");
  elLi.innerText =
    "weather lon :" + data.coord.lon + "weather lon :" + data.coord.lat;
  elDivAll.appendChild(elLi);
}

// fetch("https://api.openweathermap.org/data/3.0/onecall", {
//   key: "a1aee7d712948726bdcbe4a6568bd4b6",
// })
//   .then((res) => res.json())
//   .then((res) => console.log(res))
//   .catch((err) => console.error("err", err));
import { data } from "./secret.js";

fetch(
  `https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=${data.YOUR_API_KEY}`
)
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));

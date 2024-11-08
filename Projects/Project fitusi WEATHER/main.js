import { data } from "./secret.js";
fetch(
  `https://api.openweathermap.org/data/2.5/weather?lat=32.0853&lon=34.7818&appid=${data.YOUR_API_KEY}`
)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.error("Error:", error));

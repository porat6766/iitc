const cityElement = document.querySelector(".city");
const imgContainer = document.querySelector(".img-container");
const CelsiusElement = document.querySelector(".weather-C");
const descriptionElement = document.querySelector(".weather-describe");
const elAll = document.querySelector(".all");

const dataDadContainer = document.querySelector(".data-dad");
let desc;
let statusWeather;
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  }
}

function showPosition(position) {
  getWeather(position.coords);
}

getLocation();

const YOUR_API_KEY = "a1aee7d712948726bdcbe4a6568bd4b6";

const getWeather = (position) => {
  const { latitude, longitude } = position;
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${YOUR_API_KEY}`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      checkTemp(data.main.temp);
      cityElement.textContent = data.name;
      imgContainer.textContent = statusWeather;
      const temp = Math.round(data.main.temp - 273.15);

      CelsiusElement.textContent = temp + "°C";
      descriptionElement.textContent = desc;
    })
    .catch((error) => console.error("Error:", error));
};

const checkTemp = (temp) => {
  const tempInCelsius = temp - 273.15;
  if (tempInCelsius < 20) {
    statusWeather = "🧊";
    desc = "The weather is cool.";
    elAll.style.backgroundColor = "rgb(20, 116, 116)";
    elAll.style.color = "white";
  } else if (tempInCelsius >= 20 && tempInCelsius <= 28) {
    statusWeather = "🌤️";
    desc = "The weather is pleasant.";
    elAll.style.backgroundColor = "rgb(255, 215, 0)";
    elAll.style.color = "black";
  } else if (tempInCelsius > 28) {
    statusWeather = "🔥";
    desc = "The weather is warm.";
    elAll.style.backgroundColor = "rgb(255, 69, 0)";
    elAll.style.color = "white";
  }
  return tempInCelsius;
};

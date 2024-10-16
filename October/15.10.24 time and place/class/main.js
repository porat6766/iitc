const x = document.querySelector(".demo");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  }
}
function showPosition(position) {
  console.log(position);

  x.innerHTML = `
lat: ${position.coords.latitude}
<hr>
lon: ${position.coords.longitude}
<hr>
time: ${Date(position.timestamp)}
`;
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
      const el = document.createElement("div");
      el.style.color = "green";
      el.innerHTML = `
      <hr>
      your temp is: ${data.main.temp}`;
      x.appendChild(el);
    })
    .catch((error) => console.error("Error:", error));
};

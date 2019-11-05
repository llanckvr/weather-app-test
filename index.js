let apiResponse = null;

function displayTemperature(response) {
  apiResponse = response;
  let temperature = document.querySelector("#temperature");
  temperature.innerHTML = `${Math.round(response.data.main.temp)}`;
  let description = document.querySelector("#description");
  description.innerHTML = response.data.weather[0].description;
  let humidity = document.querySelector("#humidity");
  humidity.innerHTML = `${response.data.main.humidity}%`;
  let wind = document.querySelector("#wind");
  wind.innerHTML = `${response.data.wind.speed}m/s`;
  let rain = document.querySelector("#rain");
  rain.innerHTML = response.data.weather[0].main;

  console.log(apiResponse);
}

function search(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#city-input");

  let city = document.querySelector("#city-name");
  city.innerHTML = cityInput.value;

  let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=7ef85d788990126f9a396a0335757858&units=metric`;
  // let url =
  //   "https://api.openweathermap.org/data/2.5/weather?q=Lisbon&appid=7ef85d788990126f9a396a0335757858&units=metric";

  // const string = "hello `` ";
  // const secondString = `hello ${username}`;

  // console.log("THIS IS MY CITY", cityInput.value);
  // console.log("THIS IS MY URL", url);
  axios.get(url).then(displayTemperature);
}

let searchForm = document.querySelector("#search-form");
console.log(searchForm);
searchForm.addEventListener("submit", search);

function convertToCelsius() {
  let temperature = document.querySelector("#temperature");
  let link = document.querySelector("#celsius");
  link.classList.add("active");
  let fahrenheitLink = document.querySelector("#fahrenheit");
  fahrenheitLink.classList.remove("active");
  temperature.innerHTML =
    apiResponse === null ? "-" : `${Math.round(apiResponse.data.main.temp)}`;
}

function convertToFahrenheit() {
  let temperature = document.querySelector("#temperature");
  let link = document.querySelector("#fahrenheit");
  link.classList.add("active");
  let celsiusLink = document.querySelector("#celsius");
  celsiusLink.classList.remove("active");
  temperature.innerHTML = Math.round(
    (`${Math.round(apiResponse.data.main.temp)}` * 9) / 5 + 32
  );
}

//let searchForm = document.querySelector("#search-form");
//console.log(searchForm);
//searchForm.addEventListener("submit", search);

let datePreview = document.querySelector("#actual-time");
let actualTime = new Date();
let days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
let hours = actualTime.getHours();
let minutes = actualTime.getMinutes();
let day = days[actualTime.getDay()];

datePreview.innerHTML = day + " " + hours + ":" + minutes;

let celsiuslink = document.querySelector("#celsius");
celsiuslink.addEventListener("click", convertToCelsius);
convertToCelsius();

let fahrenheitLink = document.querySelector("#fahrenheit");
fahrenheitLink.addEventListener("click", convertToFahrenheit);

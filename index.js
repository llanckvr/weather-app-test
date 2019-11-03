function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");
  let city = document.querySelector("#city-name");
  city.innerHTML = searchInput.value;
}

function convertToCelsius() {
  let temperature = document.querySelector("#temperature");
  let link = document.querySelector("#celsius");
  link.classList.add("active");
  let fahrenheitLink = document.querySelector("#fahrenheit");
  fahrenheitLink.classList.remove("active");
  temperature.innerHTML = 24;
}

function convertToFahrenheit() {
  let temperature = document.querySelector("#temperature");
  let link = document.querySelector("#fahrenheit");
  link.classList.add("active");
  let celsiusLink = document.querySelector("#celsius");
  celsiusLink.classList.remove("active");
  temperature.innerHTML = Math.round((22 * 9) / 5 + 32);
}

let searchForm = document.querySelector("#search-form");
console.log(searchForm);
searchForm.addEventListener("submit", search);

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

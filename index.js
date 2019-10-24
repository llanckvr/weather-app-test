function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");
  let city = document.querySelector("#city-name");
  city.innerHTML = searchInput.value;
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

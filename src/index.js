// Week 5 - Final Assignment
let apiKey = "384781b633046620eaed677419a0ac6e";

// 1st function: Getting the temperature and making sure it is displayed in an element
function showTemperature(response) {
    document.querySelector("#temperature").innerHTML = Math.round(
        response.data.main.temp
    );

    document.querySelector("#city-display").innerHTML = response.data.name;

    document.querySelector("#humidity").innerHTML = response.data.main.humidity;

    document.querySelector("#wind").innerHTML = response.data.wind.speed;

    document.querySelector("#day-feel").innerHTML = response.data.weather[0].main;
    console.log(response.data.weather[0].main);
}

// 2nd function: Getting whatever is typed on the search box and returning the function with api result
function search(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#search-form-input");

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&appid=${apiKey}&units=metric`;
    axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature);
}
let form = document.querySelector("#search-form");
form.addEventListener("submit", search);

// 3rd function: Getting my current location + Returning the temp results from 1st function (with the click)
function currentTemp(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(function (position) {
        let lat = position.coords.latitude;
        let long = position.coords.longitude;
        let units = "metric";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=${units}`;

        axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature);
        console.log(showTemperature);
    });
}

let currentButton = document.querySelector("#current-location-button");
currentButton.addEventListener("click", currentTemp);

// ---------------------------------------------------------------------- week5

// Celsius/Farenheit - Still need to improve this
function changeFarenheit(event) {
    event.preventDefault();
    let farenheit = document.querySelector("#temperature");
    farenheit.innerHTML = 66;
}
function changeCelsius(event) {
    event.preventDefault();
    let celsius = document.querySelector("#temperature");
    // celsius.innerHTML = `${currentTemp}°`;
}

let farenheitTemp = document.querySelector("#farenheit-link");
let celsiusTemp = document.querySelector("#celsius-link");

farenheitTemp.addEventListener(`click`, changeFarenheit);
celsiusTemp.addEventListener(`click`, changeCelsius);

// Mock Data (From week 3)
let now = new Date();
console.log(now.getDate());

let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];
let day = days[now.getDay()];
console.log(day);

let hour = now.getHours();
console.log(hour);

let minutes = now.getMinutes();
console.log(minutes);

let time = document.querySelector("#day-time");
time.innerHTML = `${day} ${hour}:${minutes}`;

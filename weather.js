// const key = "d383f99742b4455f98d61509252904"
// const url = "http://api.weatherapi.com/v1/current.json"

// // fetch the weather data from the API
// async function getWeather(city) {
//     const response = await fetch(`${url}?key=${key}&q=${city}`)
//     const data = await response.json()
//     return data
// }

// console.log(getWeather("London"))

const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.getElementById("cityInput");
const weatherResult = document.querySelector(".card");
const key = "d383f99742b4455f98d61509252904";
const url = "http://api.weatherapi.com/v1/current.json";

weatherForm.addEventListener("submit", async event => {
  event.preventDefault();

  const city = cityInput.value;

  if(city) {
    try {
      const weatherData = await getWeather(city);
      displayWeatherInfo(weatherData);
    }
    catch {
      displayError("City not found");
    }
  }
  else {
    displayError("Please enter a city name");
  }

});


async function getWeather(city) {
  const response = await fetch(`${url}?key=${key}&q=${city}`)
     const data = await response.json()
     return data
}

function displayWeatherInfo(data) {

}

function getWeatherEmoji(weatherId) {

}

function displayError(message) {
  const errorDisplay = document.createElement("p");
  errorDisplay.textContent = message;
  errorDisplay.classList.add("errorDisplay");
  weatherResult.textContent = "";
  weatherResult.style.display = "flex";
  weatherResult.appendChild(errorDisplay);
  
}
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
const conditionUrl = "https://www.weatherapi.com/docs/weather_conditions.json";

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
     if (!response.ok) {
      throw new Error("City not found");
     }
     return data;
}

function displayWeatherInfo(data) {
  const city = data.location.name;
  const temp = data.current.temp_c;
  const humidity = data.current.humidity;
  const description = data.current.condition.text;
  const speed = data.current.wind_kph;
  const weatherId = data.current.condition.code;

  weatherResult.textContent = "";
  weatherResult.style.display = "flex";
  weatherResult.style.alignItems = "center";
  weatherResult.style.justifyContent = "center";
  weatherResult.style.flexDirection = "column";
  const cityDisplay = document.createElement("h1");
  const tempDisplay = document.createElement("p");
  const humidityDisplay = document.createElement("p");
  const descriptionDisplay = document.createElement("p");
  const weatherEmoji = document.createElement("img");
  const speedDisplay = document.createElement("p");

  cityDisplay.textContent = ` ${city}`;
  tempDisplay.textContent = ` ${temp}°C`;
  humidityDisplay.textContent = `Humidity: ${humidity}%`;
  descriptionDisplay.textContent = ` ${description}`;
  weatherEmoji.textContent = getWeatherEmoji(weatherId);
  speedDisplay.textContent = ` ${speed} m/s`;

  cityDisplay.classList.add("cityDisplay");
  tempDisplay.classList.add("tempDisplay");
  humidityDisplay.classList.add("humidityDisplay");
  descriptionDisplay.classList.add("descriptionDisplay");
  weatherEmoji.classList.add("weatherEmoji");
  speedDisplay.classList.add("speedDisplay");

  weatherResult.appendChild(cityDisplay);
  weatherResult.appendChild(tempDisplay);
  weatherResult.appendChild(humidityDisplay);
  weatherResult.appendChild(descriptionDisplay);
  weatherResult.appendChild(speedDisplay);
  weatherResult.appendChild(weatherEmoji);

  }

async function getWeatherEmoji(weatherId) {
  //get the weather condition data from the API
  const response = await fetch(`${conditionUrl}?key=${key}&q=${code}`);
  const data = await response.json()
  if (!response.ok) {
   throw new Error("Weather condition not found");
  }
  return data;
}


function displayError(message) {
  const errorDisplay = document.createElement("p");
  errorDisplay.textContent = message;
  errorDisplay.classList.add("errorDisplay");
  weatherResult.textContent = "";
  weatherResult.style.display = "flex";
  weatherResult.appendChild(errorDisplay);
  
}
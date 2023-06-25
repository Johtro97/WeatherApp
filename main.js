let btnUpdate = document.getElementById("btn-update");

function fetchWeather(city){
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=b8acbadd48a65146362de9416be1b620`)
    .then((res) => res.json())
    .then((data) => {   
      let weatherData = data;
      displayWeather(weatherData);
    });
}

function displayWeather(weatherData){
  let weatherWrapper = document.querySelector(".weather-wrapper");
  let table = document.querySelector("#weather-table");
  let city = document.querySelector(".city");
  let temp = weatherWrapper.querySelector("#temp");
  let description = weatherWrapper.querySelector("#description");
  let pressure = weatherWrapper.querySelector("#pressure");
  let humidity = weatherWrapper.querySelector("#humidity");
  let wind = weatherWrapper.querySelector("#windspeed");

  city.innerText = weatherData.name + ", " + weatherData.sys.country;
  temp.innerText = weatherData.main.temp.toFixed(1) + " °C";
  description.innerText = weatherData.weather[0]['description'];
  pressure.innerText = weatherData.main.pressure + " hPa";
  humidity.innerText = weatherData.main.humidity + " %";
  wind.innerText = weatherData.wind.speed + " m/s";
  
  weatherWrapper.append(city, temp, description, table);
  table.append(pressure, humidity, wind);
  
  //refresh page when user press button
  btnUpdate.addEventListener('click', () => {
    location.reload(); 
  })
}

fetchWeather("stockholm");
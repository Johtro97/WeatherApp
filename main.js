
async function getWeather(){
    try {
        let response = await fetch("https://api.openweathermap.org/data/2.5/weather?lat=59.329323&lon=18.068581&appid=b8acbadd48a65146362de9416be1b620&units=metric") 
        let weatherData = await response.json();
        console.log(weatherData);
    }

    catch (error){
        console.log('Error:', error)
    }
}

getWeather();

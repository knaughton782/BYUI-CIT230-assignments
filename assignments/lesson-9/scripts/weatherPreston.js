var prestonWeather = new XMLHttpRequest();
prestonWeather.open("GET", "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=4831108ded6d20d14caa3120d42a6376", true);

prestonWeather.onload = function () {
    var res = JSON.parse(this.responseText);
    document.getElementById('currentCondition').innerHTML = res.weather[1];
    document.getElementById('currentTemp').innerHTML = res.main.temp;
    document.getElementById('humidity').innerHTML = res.main.humidity;
    // document.getElementById('precip').innerHTML = res.rain["3h"];
    document.getElementById('windSpeed').innerHTML = res.wind.speed;
    document.getElementById('windSpeed').innerHTML = res.wind.speed;
    document.getElementById('headerCurrentCondition').innerHTML = res.weather.description;
}

prestonWeather.send();
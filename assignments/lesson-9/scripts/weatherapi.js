
let weatherRequest = new XMLHttpRequest();

weatherRequest.onload = function () {
    var results = JSON.parse(this.responseText);
    document.getElementById("current-temp").innerHTML = results.main.temp;
}

weatherRequest.open("GET", "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=4831108ded6d20d14caa3120d42a6376", true);
weatherRequest.send();


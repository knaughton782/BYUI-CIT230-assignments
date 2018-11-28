var weatherObj = new XMLHttpRequest();
weatherObj.open("GET", "https://byui-cit230.github.io/weather/data/towndata.json", true);

weatherObj.onload = function() {
    var results = JSON.parse(this.responseText);
    document.getElementById('prestonMotto').innerHTML = results.towns[4].motto;
    document.getElementById('prestonFounded').innerHTML = results.towns[4].yearFounded;
    document.getElementById('prestonPop').innerHTML = results.towns[4].currentPopulation;
    document.getElementById('prestonRain').innerHTML = results.towns[4].averageRainfall;

    document.getElementById('sodaSpringsMotto').innerHTML = results.towns[5].motto;
    document.getElementById('sodaSpringsFounded').innerHTML = results.towns[5].yearFounded;
    document.getElementById('sodaSpringsPop').innerHTML = results.towns[5].currentPopulation;
    document.getElementById('sodaSpringsRain').innerHTML = results.towns[5].averageRainfall;

    document.getElementById('fishHavenMotto').innerHTML = results.towns[1].motto;
    document.getElementById('fishHavenFounded').innerHTML = results.towns[1].yearFounded;
    document.getElementById('fishHavenPop').innerHTML = results.towns[1].currentPopulation;
    document.getElementById('fishHavenRain').innerHTML = results.towns[1].averageRainfall;
}

weatherObj.send();


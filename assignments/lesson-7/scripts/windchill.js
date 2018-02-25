/*The formula to calculate the wind chill factor is:

f = 35.74 + 0.6215 t - 35.75 s0.16 + 0.4275 t s0.16 

where f is the wind chill factor in Fahrenheit, t is the air average temperature in Fahrenheit, and s is the wind speed in miles per hour.  */

function windChill() {
  var speed = 5;
  var high = 90;
  var low = 66;
  var t = (high + low) / 2;
  var s = Math.pow(speed, 0.16);

  var calcWindChill = windChillFunc(t, s);

  document.getElementById("windchill").innerHTML =
    "Windchill: " + calcWindChill.toFixed(2);

  function windChillFunc() {
    return (
      35.74 +
      0.6215 * t -
      35.75 * Math.pow(s, 0.16) +
      0.4275 * t * Math.pow(s, 0.16)
    );
  }
}

const convertToCelsius = function (fahrenheitTemperature) {
  let celciusTemperature = (fahrenheitTemperature - 32) / 1.8;
  celciusTemperature = Math.round(celciusTemperature * 10) / 10;
  return celciusTemperature;
};

const convertToFahrenheit = function (celciusTemperature) {
  let fahrenheitTemperature = ((9 / 5) * celciusTemperature) + 32;
  fahrenheitTemperature = Math.round(fahrenheitTemperature * 10) / 10;
  return fahrenheitTemperature;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

const convertToCelsius = function (temperature) {
  const celsius = ((temperature - 32) * 5) / 9;
  const roundedTemperature = Math.round(celsius * 10) / 10;
  return roundedTemperature;
};

const convertToFahrenheit = function () {};

console.log(convertToCelsius(57));

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};

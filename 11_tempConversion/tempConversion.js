const convertToCelsius = function (temperature) {
  const celsius = ((temperature - 32) * 5) / 9;
  const roundedTemperature = Math.round(celsius * 10) / 10;
  return roundedTemperature;
};

const convertToFahrenheit = function (temperature) {
  const fahrenheit = (temperature * 9) / 5 + 32;
  const roundedTemperature = Math.round(fahrenheit * 10) / 10;
  return roundedTemperature;
};

console.log(convertToCelsius(32));
console.log(convertToFahrenheit(-10));

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};

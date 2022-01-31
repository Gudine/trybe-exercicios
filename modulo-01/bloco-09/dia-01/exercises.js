/* Resposta para as perguntas:
1: A, B, C
2: A, C, B
10:
1 - beforeEach
1 - test
1 - afterEach
2 - beforeEach
2 - test
2 - afterEach*/

const getPlanet = () => {
  const mars = {
    name: "Mars",
    distanceFromSun: {
      value: 227900000,
      measurementUnit: "kilometers",
    },
  };
  setTimeout(() => console.log("Returned planet: ", mars), 4000);
};

getPlanet();

const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9/5) + 32;

const temperatureInFahrenheit = (temperature) =>
  console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);

const greet = (temperature) =>
  console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

const handleError = (errorReason) =>
  console.log(`Error getting temperature: ${errorReason}`);

const sendMarsTemperature = (callback, errorHandler) => {
  setTimeout(() => {
    if (Math.random() < 0.4) {
      if (errorHandler) errorHandler('Robot is busy');
    } else {
      const temp = getMarsTemperature();
      if (!callback) console.log(`Mars temperature is: ${temp} degree Celsius`);
      else callback(temp);
    }
  }, messageDelay());
};

sendMarsTemperature();

sendMarsTemperature(temperatureInFahrenheit, handleError);
sendMarsTemperature(greet, handleError);

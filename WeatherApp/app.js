const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});
app.post("/", function (req, res) {
  console.log(req.body.cityName);
  let query = req.body.cityName;
  let appid = "provided API token from Open Weather Map";
  let units = "metric";
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    query +
    "&units=" +
    units +
    "&appid=" +
    appid;
  https.get(url, function (response) {
    // console.log(response);
    console.log(response.statusCode);
    response.on("data", function (data) {
      const weatherData = JSON.parse(data);
      let temp = weatherData.main.temp;
      let weatherDis = weatherData.weather[0].description;
      const icon =
        "https://openweathermap.org/img/wn/" +
        weatherData.weather[0].icon +
        "@2x.png";
      res.write(
        `<h1>The Temperature in ${query} is ${temp} Degree celcius <h1/>`
      );
      res.write(`<h2>Weather is currently ${weatherDis} <h2/>`);
      res.write("<img src=" + icon + ">");
    });
  });
});
app.listen(3000, function () {
  console.log("Server is running on Port 3000");
});

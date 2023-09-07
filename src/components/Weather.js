import React from "react";

const Weather = ({ weather }) => {
  console.log(weather);
  return (
    <div>
      <h1>{weather && weather.name}의 날씨 </h1>
      <h4>{weather?.weather[0].description}</h4>

      <h5>최고 온도: {weather?.main.temp_max} °C</h5>
      <h5>최저 온도: {weather?.main.temp_min} °C</h5>
    </div>
  );
};

export default Weather;

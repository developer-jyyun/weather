import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Weather from "./components/Weather";
import WeatherBtn from "./components/WeatherBtn";

function App() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("");

  const cities = [
    "Seoul",
    "Los Angeles",
    "New York",
    "Las Vegas",
    "Playa del Carmen",
    "Cancun",
  ];

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude; //위도
      let lon = position.coords.longitude; //경도
      console.log("현재위치:", lat, lon); //현재위치: 37.6471552 127.0284288
      getWeatherByCurrentLocation(lat, lon); //현재위치: 37.6471552 127.0284288
    });
  };

  const getWeatherByCurrentLocation = async (lat, lon) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=83d39c03bab22f218e4d0ca7e1634476&units=metric&lang=kr`;
    let response = await fetch(url);
    let data = await response.json();
    console.log("data", data);
    setWeather(data);
  };

  const getWeatherByCity = async () => {
    // setCity();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=83d39c03bab22f218e4d0ca7e1634476&units=metric&lang=k`;
    let res = await fetch(url);
    let data = await res.json();
    setWeather(data);
  };

  useEffect(() => {
    if (city === '') {
      getCurrentLocation();
    } else {
      getWeatherByCity();
      console.log("city:", city);
    }
  }, [city]);

  return (
    <div className="App container">
      <div className="box">
        <Weather weather={weather} />
        <WeatherBtn cities={cities} setCity={setCity} setWeather={setWeather} />
      </div>
    </div>
  );
}

export default App;

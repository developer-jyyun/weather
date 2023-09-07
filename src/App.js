import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude; //위도
      let lon = position.coords.longitude; //경도
      console.log("현재위치:", lat, lon); //현재위치: 37.6471552 127.0284288
      getWeatherByCurrentLocation(lat, lon); //현재위치: 37.6471552 127.0284288
    });
  };

  const getWeatherByCurrentLocation = async (lat, lon) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=83d39c03bab22f218e4d0ca7e1634476`;
    let response = await fetch(url);
    let data = await response.json();
    console.log("data", data);
  };

  useEffect(() => {
    getCurrentLocation();
  }, []);

  return <div className="App">ggggggggggggggg</div>;
}

export default App;

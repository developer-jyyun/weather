import React, { useState, useEffect } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Weather from "./components/Weather";
import WeatherBtn from "./components/WeatherBtn";
import ClipLoader from "react-spinners/ClipLoader";

function App() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);
  const cities = [
    "Los Angeles",
    "Las Vegas",
    "Playa del Carmen",
    "Cancun",
    "Seoul"
  ];
  // const [btn, clickBtn] = useState(false,true);

  const getWeatherByCurrentLocation = async (lat, lon) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=83d39c03bab22f218e4d0ca7e1634476&units=metric&lang=kr`;
    setLoading(true);
    let response = await fetch(url);
    let data = await response.json();
    setLoading(false);
    console.log("data", data);
    setWeather(data);
  };

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude; //위도
      let lon = position.coords.longitude; //경도
      console.log("현재위치:", lat, lon); //현재위치: 37.6471552 127.0284288
      getWeatherByCurrentLocation(lat, lon); //현재위치: 37.6471552 127.0284288
    });
  };

  const getWeatherByCity = async () => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=83d39c03bab22f218e4d0ca7e1634476&units=metric&lang=k`;
    setLoading(true);
    let res = await fetch(url);
    let data = await res.json();
    setLoading(false);
    setWeather(data);
  };

  useEffect(() => {
    if (city === "") {
      getCurrentLocation();
      } else {
      getWeatherByCity();
      console.log("city:", city);
    }
  }, [city]);

  const handleCityChange = (city) => {
    if (city === "current") {  
      // setCity(null);
      getCurrentLocation();
    } else {
      setCity(city);
    }
  };

  return (
    <div className="App">
      {/*loading-===true ? 로딩스피너 : 날씨box */}
      {loading ? (
        <div className="container">
          <ClipLoader
            color="#eaaa0a"
            loading={loading}
            // cssOverride={override}
            size={50}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <div className="container">
          <div className="box">
            <Weather weather={weather} />
            <WeatherBtn
              cities={cities}
              city={city}
              handleCityChange={handleCityChange}
              selectedCity={city}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

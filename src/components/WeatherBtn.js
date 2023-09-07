import React from "react";

const WeatherBtn = ({ cities, selectedCity, handleCityChange }) => {
  // console.log('cities:',cities)

  return (
    <div className="btn-area">
      <button
        className={`city-btn ${selectedCity === null ? "act" : "city-btn"}`}
        onClick={() => {
          handleCityChange("current");
        }}
      >
        현재위치
      </button>
      {cities.map((city, i) => (
        <button
          className={`city-btn ${selectedCity === city ? "act" : "city-btn"}`}
          key={i}
          onClick={() => {
            handleCityChange(city);
          }}
        >
          {city}
        </button>
      ))}
    </div>
  );
};

export default WeatherBtn;

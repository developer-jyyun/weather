import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
const WeatherBtn = ({ cities, setCity, setWeather }) => {
  // console.log('cities:',cities)


  return (
    <div className="btn-area">
      {cities.map((a, i) => (
        <Button
          variant="outline-warning"
          key={i}
          onClick={() => {
            setCity(a);
            // getWeatherByCity(a);
          }}
        >
          {a}
        </Button>
      ))}

      {/* <Button variant="outline-warning">현재위치</Button>{' '}
      <Button variant="outline-warning">Los Angeles</Button>{' '}
      <Button variant="outline-warning">New York</Button>{' '}
      <Button variant="outline-warning">Las Vegas</Button>{' '}
      <Button variant="outline-warning"> Playa del Carmen</Button>{' '}
      <Button variant="outline-warning"> Cancun</Button>{' '} */}
    </div>
  );
};

export default WeatherBtn;

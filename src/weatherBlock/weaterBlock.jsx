import React, { useEffect, useState } from "react";
import "./weatherBlock.css";
import citys from "../services/citys";
import CurrentWeather from "./currentWeather";
import FutureWeather from "./futureWeather";
import Header from "../header/header";

const WeatherBlock = () => {
  const [location, setLocation] = useState("Абаза");

  const handleSelect = (value) => {
    setLocation(value.target.value);
  };

  return (
    <>
      <Header />
      <div className="block">
        <select className="select" onChange={(op) => handleSelect(op)}>
          {citys.map((city) => (
            <option value={city.name} key={city._id}>
              {city.name}
            </option>
          ))}
        </select>
        <div className="weather">
          <CurrentWeather location={location} />
          <FutureWeather location={location} />
        </div>
      </div>
    </>
  );
};

export default WeatherBlock;

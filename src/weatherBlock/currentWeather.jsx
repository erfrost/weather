import React, { useEffect, useState } from "react";
import { getCurrentWeather } from "../services/http.service";

const CurrentWeather = ({ location }) => {
  const [weather, setWeather] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  async function getCurrent(location) {
    try {
      const data = await getCurrentWeather(location);
      setWeather(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    getCurrent(location);
  }, [location]);

  return (
    <div className="currentWeather">
      <div className="tempCountry">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div className="temp">{!isLoading ? weather.temp_c : "Loading"}°</div>
          <div className="cloudCover">
            {!isLoading ? weather.condition.text : "Loading"}
          </div>
          <div className="dopParams">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div>HUMIDITY</div>
              <div>{!isLoading ? weather.humidity : "Loading"} %</div>
            </div>
            <div className="verticalLine"></div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div>WIND</div>
              <div>{!isLoading ? weather.wind_kph : "Loading"} km/h</div>
            </div>
          </div>
        </div>
        <div className="country">Russia</div>
      </div>
    </div>
  );
};

export default CurrentWeather;

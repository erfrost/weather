import React, { useEffect, useState } from "react";
import { getFutureWeather } from "../services/http.service";

const FutureWeather = ({ location }) => {
  const [forecast, setForecast] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  async function getFuture(location) {
    try {
      const data = await getFutureWeather(location);
      setForecast(data.forecastday);
      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    getFuture(location);
  }, [location]);

  return (
    <div className="weekWeather">
      <div className="vk"></div>
      <div className="line2"></div>
      <div className="week">
        {" "}
        {!isLoading
          ? forecast.map((item) => (
              <div className="item" key={item.date.slice(8, 10)}>
                <div className="number">{item.date.slice(8, 10)}</div>
                <div className="oneDay"></div>

                <div className="underText">
                  <div className="underTemp">
                    {Math.floor(item.day.avgtemp_c)}°
                  </div>
                </div>
              </div>
            ))
          : "Loading"}
      </div>
    </div>
  );
};

export default FutureWeather;

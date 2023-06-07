import axios from "axios";

const API_KEY = "02ffec04e7e347d0ae8103303231403";

export async function getCurrentWeather(location) {
  const response = await axios.get(
    `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${location}`
  );
  return response.data.current;
}
export async function getFutureWeather(location) {
  const response = await axios.get(
    `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${location}&days=6`
  );
  return response.data.forecast;
}

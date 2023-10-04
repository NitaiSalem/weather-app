import axios from "axios";
import { Location } from "../Types.d";
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

export const getForeCast = async (location: Location | null) => {
  try {
    if (location?.latitude) {
      const weatherResponse = await axios.get(
        `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${location.latitude},${location.longitude}&days=6`
      );
      return weatherResponse.data;
    }
  } catch (err) {
    return err;
  }
};

export const foreCastByCity = async (city: string) => {
  try {
    const weatherResponse = await axios.get(
      `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=6`
    );
    return weatherResponse.data;
  } catch (err) {
    return err;
  }
};

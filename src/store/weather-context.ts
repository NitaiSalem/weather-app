import React from "react";
import { DegreeScale, IWeather, Location ,Compass } from "../Types.d";

interface WeatherContext {
  currentLocation: Location;
  error: string;
  setError: React.Dispatch<React.SetStateAction<string>>;
  weatherForecast: IWeather;
  getWeatherData: (city?: string) => void;
  setDegreeScale: React.Dispatch<React.SetStateAction<string>>;
  setIsSearch: React.Dispatch<React.SetStateAction<boolean>>;
  isSearch: boolean;
  degreeScale: string;
}


const WeatherContext = React.createContext<WeatherContext>({
  currentLocation: {
    latitude: 0,
    longitude: 0,
  },
  error: "",
  weatherForecast: {
    city: "",
    icon: "",
    conditionText: "",
    tempC: 0,
    tempF: 0,
    date: "",
    wind: 0,
    visibility: 0,
    airPressure: 0,
    humidity: 0,
    forecast: [],
    windDirection: Compass.E,
  },
  getWeatherData: () => null,
  degreeScale: DegreeScale.Celsius,
  setDegreeScale: () => null,
  setIsSearch: () => null,
  isSearch: false,
  setError: () => null,
});

export default WeatherContext;

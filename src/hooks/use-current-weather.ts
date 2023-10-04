import { useEffect, useState } from "react";
import { getForeCast, foreCastByCity } from "../utils/api";
import { formatDate } from "../utils/formatDate";
import type { ForecastDay } from "../utils/api.d";
import { ContextForecastDay } from "../components/MainWindow/Forecast/Forecast";
import { IWeather, Location, Compass } from "../Types.d";

const UseCurrentWeather = () => {
  const [isSearch, setIsSearch] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [currentLocation, setCurrentLocation] = useState<Location>({
    latitude: 0,
    longitude: 0,
  });
  const [error, setError] = useState("");
  const [degreeScale, setDegreeScale] = useState("C");
  const [weatherForecast, setWeatherForecast] = useState<IWeather>({
    city: "",
    icon: "",
    conditionText: "",
    tempC: 0,
    tempF: 0,
    date: "",
    forecast: [],
    wind: 0,
    visibility: 0,
    airPressure: 0,
    humidity: 0,
    windDirection: Compass.N,
  });

  function getCurrentLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      alert(
        "Unable to retrieve your location. Please Enable browser Location services and refresh the page"
      );
    }
    function success(position: GeolocationPosition) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      setCurrentLocation({ latitude, longitude });
    }
    function error() {
      console.log("error in geolocation");
      alert("Please Enable browser Location services and refresh the page");
      setError("Please Enable Location services and refresh the page");
    }
  }

  async function getWeatherData(city?: string) {
    try {
      const weatherForecastData = city
        ? await foreCastByCity(city)
        : await getForeCast(currentLocation);

      if (weatherForecastData) {
        setError("");

        const {
          location,
          current,
          current: { condition },
          forecast: { forecastday },
        } = weatherForecastData;

        const forecastUpdated: ContextForecastDay[] = forecastday.map(
          (currday: ForecastDay) => {
            return {
              date: currday.date,
              icon: currday.day.condition.icon.replaceAll("64", "128"),
              minTempC: currday.day.mintemp_c.toFixed(0),
              maxTempC: currday.day.maxtemp_c.toFixed(0),
              minTempF: currday.day.mintemp_f.toFixed(0),
              maxTempF: currday.day.maxtemp_f.toFixed(0),
            };
          }
        );

        setWeatherForecast({
          city: location.name,
          icon: condition.icon,
          conditionText: condition.text,
          tempC: current.temp_c,
          tempF: current.temp_f,
          date: formatDate(),
          forecast: forecastUpdated,
          wind: current.wind_kph,
          visibility: current.vis_km,
          airPressure: current.pressure_mb,
          humidity: current.humidity,
          windDirection: current.wind_dir,
        });
        setIsLoading(false);
        setIsSearch(false);
      }
    } catch (err) {
      setError("Please enter a valid city name");
      return err;
    }
  }

  useEffect(() => {
    getCurrentLocation();
    getWeatherData();
  }, [currentLocation.latitude]);

  return {
    currentLocation,
    weatherForecast,
    getWeatherData,
    error,
    setError,
    setIsSearch,
    isSearch,
    degreeScale,
    setDegreeScale,
    isLoading,
  };
};

export default UseCurrentWeather;

import { useContext } from "react";
import { ForecastBoxRow } from "./Forecast.styled";
import WeatherContext from "../../../store/weather-context";
import ForecastBox from "./ForecastBox";
import { formatDate } from "../../../utils/formatDate";

export interface ContextForecastDay {
  date: string;
  icon: string;
  maxTempC: number;
  maxTempF: number;
  minTempC: number;
  minTempF: number;
}

const ForecastContainer = () => {
  const { weatherForecast } = useContext(WeatherContext);
  const { forecast } = weatherForecast;
  forecast.length === 6 && forecast.shift();

  return (
    <ForecastBoxRow>
      {forecast?.map((currday, i) => {
        return (
          <ForecastBox
            key={Math.random()}
            date={
              i === 0
                ? "Today"
                : i === 1
                ? "Tomorrow"
                : formatDate(currday.date)
            }
            icon={currday.icon}
            maxTempC={currday.maxTempC}
            maxTempF={currday.maxTempF}
            minTempC={currday.minTempC}
            minTempF={currday.minTempF}
          ></ForecastBox>
        );
      })}
    </ForecastBoxRow>
  );
};

export default ForecastContainer;

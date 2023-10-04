import WeatherContext from "../../../store/weather-context";
import { useContext } from "react";
import { BoxLineWrapper } from "./Highlights.styled";
import { NumberHigh, NumberLevel } from "../Forecast/Forecast.styled";
const VisibilityBox = () => {
  const { weatherForecast } = useContext(WeatherContext);
  return (
    <>
      <BoxLineWrapper>
        <h3 style={{ fontSize: "16px" }}>Visibility</h3>
      </BoxLineWrapper>
      <BoxLineWrapper>
        <h1 style={{ fontSize: "46px" }}>
          <NumberHigh>{weatherForecast.visibility.toString()[0]}</NumberHigh>
          <NumberLevel>{weatherForecast.visibility.toString()[1]}</NumberLevel>
          <span style={{ fontSize: "22px" }}> miles</span>
        </h1>
      </BoxLineWrapper>
    </>
  );
};

export default VisibilityBox;

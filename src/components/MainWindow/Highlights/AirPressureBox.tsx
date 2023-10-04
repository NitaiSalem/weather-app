import { useContext } from "react";
import WeatherContext from "../../../store/weather-context";
import { BoxLineWrapper } from "./Highlights.styled";
import { NumberHigh, NumberLevel } from "../Forecast/Forecast.styled";

const AirPressureBox = () => {
  const { weatherForecast } = useContext(WeatherContext);
  const airPressureArray = weatherForecast.airPressure.toString().split("");
  return (
    <>
      <BoxLineWrapper>
        <h3 style={{ fontSize: "16px" }}>Air Pressure</h3>
      </BoxLineWrapper>
      <BoxLineWrapper>
        <h1 style={{ fontSize: "46px" }}>
          {airPressureArray.map((char, i) => {
            if (i === airPressureArray.length - 1) {
              return <NumberHigh key={i}>{char}</NumberHigh>;
            } else return <NumberLevel key={i}>{char}</NumberLevel>;
          })}
          <span style={{ fontSize: "22px" }}> mb</span>
        </h1>
      </BoxLineWrapper>
    </>
  );
};

export default AirPressureBox;

import { useContext } from "react";
import WeatherContext from "../../../store/weather-context";
import { ContextForecastDay } from "./Forecast";
import {
  NumberHigh,
  FirstTempLow,
  ForecastBoxElement,
  SecondTemp,
  SecondTempLow,
  NumberLevel,
  TempLine,
} from "./Forecast.styled";
import { DegreeScale } from "../../../Types.d";

const ForecastBox: React.FC<ContextForecastDay> = ({
  date,
  icon,
  minTempC,
  maxTempC,
  minTempF,
  maxTempF,
}) => {
  const tempUnit = useContext(WeatherContext).degreeScale;
  return (
    <ForecastBoxElement>
      <p>{date}</p>
      <img src={icon} />
      <TempLine>
        <NumberLevel>
          <NumberHigh>
            {tempUnit === DegreeScale.Celsius
              ? maxTempC.toString()[0]
              : maxTempF.toString()[0]}
          </NumberHigh>
          <SecondTemp>
            {tempUnit === DegreeScale.Celsius
              ? maxTempC.toString()[1]
              : maxTempF.toString()[1]}
            &deg;{tempUnit === DegreeScale.Celsius ? `C` : `F`}
          </SecondTemp>
        </NumberLevel>
        <NumberLevel>
          <FirstTempLow>
            {tempUnit === DegreeScale.Celsius
              ? minTempC.toString()[0]
              : minTempF.toString()[0]}
          </FirstTempLow>
          <SecondTempLow>
            {tempUnit === DegreeScale.Celsius
              ? minTempC.toString()[1]
              : minTempF.toString()[1]}
            &deg;{tempUnit === DegreeScale.Celsius ? `C` : `F`}
          </SecondTempLow>
        </NumberLevel>
      </TempLine>
    </ForecastBoxElement>
  );
};

export default ForecastBox;

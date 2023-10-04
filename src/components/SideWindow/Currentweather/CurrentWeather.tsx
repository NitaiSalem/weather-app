import WeatherContext from "../../../store/weather-context";
import { useContext } from "react";
import NavButtons from "./NavButtons";
import {
  CityName,
  CurrentWeatherContainer,
  DegreesBlue,
  DegreesRed,
  Description,
  FirstTemp,
  SecondTemp,
  WeatherImg,
  WeatherImgContainer,
  WeatherImgMobile,
} from "./CurrentWeather.styled";
import { MaterialIcon } from "../../../utils/MaterialIcon";
import { DegreeScale } from "../../../Types.d";

const CurrentWeather = () => {
  const weatherCtx = useContext(WeatherContext);
  const { icon, city, date, tempC, tempF, conditionText } =
    weatherCtx.weatherForecast;
  const tempUnit = weatherCtx.degreeScale;
  const largerIcon = icon.replaceAll("64", "128");

  return (
    <>
      <NavButtons />
      <CurrentWeatherContainer>
        <WeatherImgContainer>
          {window.innerWidth > 450 ? (
            <WeatherImg src={largerIcon} />
          ) : (
            <WeatherImgMobile src={largerIcon} />
          )}
        </WeatherImgContainer>
        <div>
          <FirstTemp>
            {tempUnit === DegreeScale.Celsius
              ? tempC.toString()[0]
              : tempF.toString()[0]}
            <SecondTemp>
              {tempUnit === DegreeScale.Celsius
                ? tempC.toString()[1]
                : tempF.toString()[1]}
            </SecondTemp>
            {tempC > 25 ? (
              <DegreesRed>
                &deg;{tempUnit === DegreeScale.Celsius ? `C` : `F`}
              </DegreesRed>
            ) : (
              <DegreesBlue>
                &deg;{tempUnit === DegreeScale.Celsius ? `C` : `F`}
              </DegreesBlue>
            )}
          </FirstTemp>
        </div>
        <div>
          <Description>{conditionText}</Description>
        </div>
        <div>
          <p>Today &#183; {date}</p>
          <CityName>
            <MaterialIcon visible={true} name="location_on" fontSize="22px" />
            {city}
          </CityName>
        </div>
      </CurrentWeatherContainer>
    </>
  );
};

export default CurrentWeather;

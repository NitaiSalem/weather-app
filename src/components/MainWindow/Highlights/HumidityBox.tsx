import HumidityBar, {
  HumidityLineContainer,
  ProcentSymbolWrapper,
} from "./HumidityBar";
import { useContext } from "react";
import WeatherContext from "../../../store/weather-context";
import { BoxContentWrapper, BoxLineWrapper } from "./Highlights.styled";

const HumidityBox = () => {
  const { weatherForecast } = useContext(WeatherContext);

  return (
    <>
      <BoxContentWrapper>
        <BoxLineWrapper>
          <h3 style={{ fontSize: "16px" }}>Humidity</h3>
        </BoxLineWrapper>
        <BoxLineWrapper>
          <h1 style={{ fontSize: "46px" }}>
            {weatherForecast.humidity}
            <span style={{ fontWeight: 100 }}>%</span>
          </h1>
        </BoxLineWrapper>
        <HumidityLineContainer>
          <HumidityBar humidityProcent={weatherForecast.humidity} />
          <ProcentSymbolWrapper>
            <p>%</p>
          </ProcentSymbolWrapper>
        </HumidityLineContainer>
      </BoxContentWrapper>
    </>
  );
};

export default HumidityBox;

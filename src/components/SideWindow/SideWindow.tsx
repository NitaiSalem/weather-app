import { useContext } from "react";
import WeatherContext from "../../store/weather-context";
import CurrentWeather from "./Currentweather/CurrentWeather";
import SearchLocation from "./SearchLocation/SearchLocation";
import { StyledSideWindow } from "./SideWindow.styled";

const SideWindow = () => {
  const { isSearch } = useContext(WeatherContext);
  return (
    <StyledSideWindow>
      {isSearch ? <SearchLocation /> : <CurrentWeather />}
    </StyledSideWindow>
  );
};

export default SideWindow;

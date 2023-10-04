import WeatherContext from "../../store/weather-context";
import ForecastContainer from "./Forecast/Forecast";
import Highlights from "./Highlights/Highlights";
import { MainWindowContainer } from "./MainWindow.styled";
import TempButtonsContainer from "./TempButtons/TempButtons";
import { useContext } from "react";
const MainWindow = () => {
  const { isSearch } = useContext(WeatherContext);

  return (
    <MainWindowContainer issearch={isSearch.toString()}>
      <TempButtonsContainer />
      <ForecastContainer />
      <Highlights />
    </MainWindowContainer>
  );
};

export default MainWindow;

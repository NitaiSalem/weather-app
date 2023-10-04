import SideWindow from "./components/SideWindow/SideWindow";
import WeatherContext from "./store/weather-context";
import UseCurrentWeather from "./hooks/use-current-weather";
import MainWindow from "./components/MainWindow/MainWindow";

function App() {
  const weatherData = UseCurrentWeather();

  {
    return (
      <WeatherContext.Provider value={weatherData}>
        {!weatherData.isLoading ? (
          <>
            <SideWindow />
            <MainWindow />
          </>
        ) : (
          <></>
        )}
      </WeatherContext.Provider>
    );
  }
}

export default App;

import { ReactNode, useContext, useState } from "react";
import WeatherContext from "../../../store/weather-context";
import { CityStyledLi, StyledCitiesList } from "../SideWindow.styled";
import { MaterialIcon } from "../../../utils/MaterialIcon";

const ListComponent: React.FC<{ children?: ReactNode; city: string }> = ({
  children,
  city,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const { getWeatherData } = useContext(WeatherContext);

  const searchListCity = () => {
    getWeatherData(city);
  };

  return (
    <CityStyledLi
      onMouseOver={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      onClick={searchListCity}
    >
      {children}
      <MaterialIcon visible={isVisible} name="chevron_right" />
    </CityStyledLi>
  );
};

const CitiesList: React.FC = () => {
  return (
    <StyledCitiesList>
      <ListComponent city={"London"}>London</ListComponent>
      <ListComponent city={"Barcelona"}>Barcelona</ListComponent>
      <ListComponent city={"Malta"}>Malta</ListComponent>
    </StyledCitiesList>
  );
};

export default CitiesList;

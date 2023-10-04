import { useContext } from "react";
import { CurrentLocationButton } from "./Buttons/CurrentLocationButton.styled";
import { OpenSearchButton } from "./Buttons/OpenSearchButton.styled";
import { styled } from "styled-components";
import WeatherContext from "../../../store/weather-context";
import { MaterialIcon } from "../../../utils/MaterialIcon";

const NavButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0px 20px;
`;

const NavButtons = () => {
  const { getWeatherData, setIsSearch } = useContext(WeatherContext);
  return (
    <NavButtonsContainer>
      <OpenSearchButton onClick={() => setIsSearch(true)}>
        Search for places
      </OpenSearchButton>
      <CurrentLocationButton onClick={() => getWeatherData()}>
        <MaterialIcon
          visible={true}
          name="location_searching"
          fontSize={window.innerWidth > 450 ? "26px" : "28px"}
        />
      </CurrentLocationButton>
    </NavButtonsContainer>
  );
};

export default NavButtons;

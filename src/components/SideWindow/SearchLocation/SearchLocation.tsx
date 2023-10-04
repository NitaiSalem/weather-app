import { useContext } from "react";
import {
  CloseRow,
  ErrorMessageStyled,
  ErrorWrapperStyled,
  SearchLocationContainer,
} from "../SideWindow.styled";
import CloseButton from "./CloseButton";
import Input from "./Input/Input";
import LocationsMenu from "./LocationsMenu";
import WeatherContext from "../../../store/weather-context";
const SearchLocation = () => {
  const { error } = useContext(WeatherContext);

  return (
    <SearchLocationContainer>
      <CloseRow>
        <CloseButton />
      </CloseRow>
      <Input />
      <ErrorWrapperStyled>
        {error && <ErrorMessageStyled>{error}</ErrorMessageStyled>}
      </ErrorWrapperStyled>
      <LocationsMenu />
    </SearchLocationContainer>
  );
};

export default SearchLocation;

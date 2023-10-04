import WeatherContext from "../../../../store/weather-context";
import { MaterialIcon } from "../../../../utils/MaterialIcon";
import SearchButton from "../SearchButton/SearchButton";
import {
  InputBoxexWrapper,
  InputContainer,
  InputRow,
  InputTextField,
} from "./Input.styled";
import { useContext, useEffect, useState } from "react";

const Input: React.FC<{ hasFocus?: boolean }> = ({ hasFocus }) => {
  const [inputValue, setInputValue] = useState("");
  const { getWeatherData, setError } = useContext(WeatherContext);

  function weatherByCity() {
    getWeatherData(inputValue);
  }
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };
  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      weatherByCity();
    }
  };

  useEffect(() => {
    if (inputValue === "") {
      setError("");
    }
  }, [inputValue]);

  return (
    <InputRow>
      <InputBoxexWrapper>
        <InputContainer>
          <MaterialIcon
            name="search"
            visible={true}
            fontSize={window.innerWidth > 450 ? "24px" : "32px"}
          />
          <InputTextField
            placeholder="Enter City"
            autoFocus={hasFocus}
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyPress}
          />
        </InputContainer>
        <div>
          <SearchButton weatherByCity={weatherByCity} />
        </div>
      </InputBoxexWrapper>
    </InputRow>
  );
};

export default Input;

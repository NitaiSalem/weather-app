import { useContext } from "react";
import Button from "../../Button/Button";
import { TempButtonsBar, TempButtonsBox } from "./TempButtons.styled";
import WeatherContext  from "../../../store/weather-context";
import { ButtonSize } from "../../Button/Button.d";
import { DegreeScale } from "../../../Types.d";

const TempButtonsContainer = () => {
  const { degreeScale, setDegreeScale } = useContext(WeatherContext);

  return (
    <TempButtonsBar>
      <TempButtonsBox>
        <Button
          label={`C`}
          active={(degreeScale === DegreeScale.Celsius).toString()}
          size={ButtonSize.Small}
          handleClick={() => setDegreeScale("C")}
        >
          &deg;
        </Button>
        <Button
          label={DegreeScale.Farenheite}
          active={(degreeScale === DegreeScale.Farenheite).toString()}
          size={ButtonSize.Small}
          handleClick={() => setDegreeScale("F")}
        >
          &deg;
        </Button>
      </TempButtonsBox>
    </TempButtonsBar>
  );
};

export default TempButtonsContainer;

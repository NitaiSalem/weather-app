import { useContext } from "react";
import {
  BoxContainer,
  HighlightsContainer,
  HighlightsSectionWrapper,
  HighlightsTitle,
  HighlightsTitleWrapper,
  Signature,
  SignatureName,
} from "./Highlights.styled";
import WeatherContext from "../../../store/weather-context";
import WindBox from "./WindBox";
import HumidityBox from "./HumidityBox";
import VisibilityBox from "./VisibilityBox";
import AirPressureBox from "./AirPressureBox";

const Highlights = () => {
  const weatherCtx = useContext(WeatherContext);

  const { wind, windDirection } = weatherCtx.weatherForecast;

  return (
    <HighlightsSectionWrapper>
      <HighlightsTitleWrapper>
        <HighlightsTitle>Today's Highlights</HighlightsTitle>
      </HighlightsTitleWrapper>

      <HighlightsContainer>
        <BoxContainer>
          <WindBox wind={wind} direction={windDirection} />
        </BoxContainer>
        <BoxContainer>
          <HumidityBox />
        </BoxContainer>
        <BoxContainer>
          <VisibilityBox />
        </BoxContainer>
        <BoxContainer>
          <AirPressureBox />
        </BoxContainer>
      </HighlightsContainer>
      <Signature>
        Created by <SignatureName> Nitai Salem</SignatureName>
      </Signature>
    </HighlightsSectionWrapper>
  );
};

export default Highlights;

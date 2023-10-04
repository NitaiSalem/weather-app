import { Compass } from "../../../Types";
import { MaterialIcon } from "../../../utils/MaterialIcon";
import {
  WindArrowContainer,
  BoxContentWrapper,
  WindDirectionContainer,
  BoxLineWrapper,
} from "./Highlights.styled";

const WindSpeed = ({ wind }: { wind: number }) => {
  return <h1 style={{ fontSize: "46px" }}> {Math.round(wind)} Mph</h1>;
};

const WindBox = ({ wind, direction }: { wind: number; direction: Compass }) => {
  return (
    <BoxContentWrapper>
      <BoxLineWrapper>
        <h3 style={{ fontSize: "16px" }}>Wind Status</h3>
      </BoxLineWrapper>
      <BoxLineWrapper>
        <WindSpeed wind={wind} />
      </BoxLineWrapper>
      <BoxLineWrapper>
        <WindDirectionContainer>
          <WindArrowContainer>
            <MaterialIcon visible={true} name="near_me" direction={direction} />
          </WindArrowContainer>
          <span>{direction}</span>
        </WindDirectionContainer>
      </BoxLineWrapper>
    </BoxContentWrapper>
  );
};

export default WindBox;

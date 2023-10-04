import { styled } from "styled-components";
import { COMPASS } from "./constants";
import { Compass } from "../Types.d";

function rotateByDirection(direction: keyof typeof COMPASS): string {
  return COMPASS[direction];
}

export const MaterialIcon: React.FC<{
  name: string;
  fontSize?: string;
  direction?: Compass;
  visible: boolean;
}> = ({ name, fontSize, direction, visible }) => (
  <Icon
    fontSize={fontSize ? fontSize : "16px"}
    className={`material-icons`}
    direction={direction}
    show={visible.toString()}
  >
    {name}
  </Icon>
);

const Icon = styled.i<{
  fontSize: string;
  direction?: Compass;
  show: string;
}>(({ fontSize, direction, show }) => ({
  fontSize: fontSize ? fontSize : "16px",
  transform: `rotate(-45deg) ${
    direction ? rotateByDirection(direction) : `none`
  }`,
  transition: `color 0.2s ease-in`,
  color: show === "true" ? `#C0D5E0` : `transparent`,
}));

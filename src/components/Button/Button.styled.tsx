import { styled } from "styled-components";
import { ButtonSize, type StyledButtonProps } from "./Button.d";

export const StyledButton = styled.button<StyledButtonProps>(
  ({ active, size }) => ({
    display: `flex`,
    alignItems: `center`,
    justifyContent: `center`,
    boxShadow: "none",
    backgroundColor: `${active === "true" ? `white` : `#6c6c8c`}`,
    color: `${active === "true" ? "#090a31" : "#C0D5E0"}`,
    border: `1px solid #000000`,
    height: `${
      size === ButtonSize.Small
        ? `40px`
        : size === ButtonSize.Large
        ? `60px`
        : `50px`
    }`,
    width: `${
      size === ButtonSize.Small
        ? `40px`
        : size === ButtonSize.Large
        ? `60px`
        : `50px`
    }`,
    borderRadius: "50%",
    fontWeight: `bold`,
    fontSize: `14px`,
    cursor: "pointer",
  })
);

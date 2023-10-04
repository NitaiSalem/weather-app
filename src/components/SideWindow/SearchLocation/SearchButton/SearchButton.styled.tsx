import { styled } from "styled-components";

export const StyledSearchButton = styled.button(() => ({
  backgroundColor: "#1515a3",
  border: "none",
  height: "100%",
  cursor: "pointer",
  padding: " 0px 8px",
  fontSize: "14px",
  "@media (max-width: 450px)": {
    fontSize: "20px",
    width: "80px",
  },
}));

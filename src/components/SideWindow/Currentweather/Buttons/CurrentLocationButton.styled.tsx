import { styled } from "styled-components";

export const CurrentLocationButton = styled.button<{
  onclick?: (e: MouseEvent) => void;
}>(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "40px",
  height: "40px",
  borderRadius: "100%",
  backgroundColor: "#6c6c8c",

  border: "none",
  "&:hover": { cursor: "pointer" },
  "@media (max-width: 450px)": {
    height: "60px",
    width: "60px",
  },
}));

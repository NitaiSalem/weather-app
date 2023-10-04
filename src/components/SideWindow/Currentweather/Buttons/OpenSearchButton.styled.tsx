import { styled } from "styled-components";

export const OpenSearchButton = styled.button(() => ({
  borderRadius: "2px",
  padding: "5px 10px",
  backgroundColor: "#6c6c8c",
  fontSize: "12px",
  border: "none",
  "&:hover": { cursor: "pointer" },

  "@media (max-width: 450px)": {
    height: "60px",
    width: "180px",
    fontSize: "16px",
  },
}));

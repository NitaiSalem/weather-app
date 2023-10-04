import { styled } from "styled-components";

export const MainWindowContainer = styled.div<{ issearch: string }>(
  ({ issearch }) => ({
    width: "100%",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#001c2a",
    "@media (max-width: 767px)": {
      display: issearch === "true" ? "none" : "inherit",
      height: "100%",
    },
  })
);

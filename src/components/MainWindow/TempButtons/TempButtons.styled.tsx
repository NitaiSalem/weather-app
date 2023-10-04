import { styled } from "styled-components";

export const TempButtonsBar = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
  width: 830px;

  @media (max-width: 850px) {
    display: none;
  }
`;

export const TempButtonsBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 86px;
`;

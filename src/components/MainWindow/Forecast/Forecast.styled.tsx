import { styled } from "styled-components";

export const ForecastBoxRow = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-self: center;
  width: 830px;
  padding: 20px 0px;

  @media (max-width: 850px) {
    flex-direction: column;
    width: 100%;
    height: 100vh;
    align-items: center;
  }
`;

export const ForecastBoxElement = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #090a31;
  font-size: 22px;
  padding: 12px;
  align-items: center;
  width: 180px;
  border-radius: 4px;

  @media (max-width: 850px) {
    width: 220px;
  }

  @media (max-height: 700px) {
    padding: 4px;
  }
`;

export const TempLine = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-height: 700px) {
    font-size: 18px;
  }
`;
export const NumberLevel = styled.span``;

export const NumberHigh = styled.span`
  position: relative;
  bottom: 3px;
`;
export const NumberLow = styled.span`
  position: relative;
  top: 3px;
`;

export const SecondTemp = styled.span`
  margin-right: 10px;
`;

export const FirstTempLow = styled.span`
  color: #6c6c8c;
  margin-left: 10px;
`;

export const SecondTempLow = styled.span`
  color: #6c6c8c;
`;

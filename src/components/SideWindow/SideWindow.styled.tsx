import { styled } from "styled-components";

export const StyledSideWindow = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  background-color: #090a31;
  padding: 20px 0px;
  @media (max-width: 1066px) {
    align-self: center;
    height: 100vh;
  }
  @media (max-width: 450px) {
    width: 100%;
  }
`;

export const SearchLocationContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CityStyledLi = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  width: 90%;
  border: 1px solid transparent;
  transition: border 0.3s ease-out;
  margin-top: 20px;
  &:hover {
    cursor: pointer;
    border: 1px solid #c0d5e0;
  }
  @media (max-width: 450px) {
    font-size: 22px;
    border: 1px solid #c0d5e0;
  }
`;

export const StyledCitiesList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  align-items: center;
  width: 100%;
`;
export const CityWrapper = styled.div`
  padding: 10px;
`;

export const CloseRow = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0px 12px;
`;

export const CloseButtonStyled = styled.button`
  background-color: transparent;
  display: flex;
  border: none;
  padding: 4px;
  cursor: pointer;
`;

export const ErrorMessageStyled = styled.p`
  color: #ba1307;
  font-size: 15px;
  padding: 0px 20px;
`;

export const ErrorWrapperStyled = styled.div`
  height: 5px;
`;

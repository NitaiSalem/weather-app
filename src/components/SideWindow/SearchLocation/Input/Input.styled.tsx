import { styled } from "styled-components";

export const InputTextField = styled.input`
  background-color: transparent;
  outline: none;
  height: 100%;
  width: 100%;
  border: none;
  font-size: 14px;  
  &:focus: {  
    outline: none;
  };
  @media(max-width: 450px) {
    font-size: 20px;
  },
`;
export const InputContainer = styled.div`
  border: 1px solid #6c6c8c;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 180px;
  padding: 0px 5px;
  &:focus-within {
    border: 1px solid #c0d5e0;
  }
  @media (max-width: 1066px) {
    height: 60px;
    width: 220px;
  }
`;
export const InputRow = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  align-self: center;
  padding: 20px 0px;
  @media (max-width: 450px) {
    padding: 20px 0px;
  }
`;
export const InputBoxexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
`;

export const SearchButtonContainer = styled.div`
  display: flex;
`;
export const InputLabel = styled.label``;

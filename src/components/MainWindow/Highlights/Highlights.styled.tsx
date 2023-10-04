import { styled } from "styled-components";

export const HighlightsContainer = styled.div`
  display: grid;
  grid-template-columns: 400px 400px;
  grid-template-rows: 200px 100px;
  gap: 15px 30px;
  @media (max-width: 850px) {
    grid-template-columns: 330px;
    grid-template-rows: 2fr 2fr 1fr 1fr;
    height: calc(100vh - 82px);
  }
`;

export const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #090a31;
  padding: 10px;
  border-radius: 4px;
`;
export const WindArrowContainer = styled.div(() => ({
  display: "flex",
  backgroundColor: "#6c6c8c",
  height: "30px",
  width: "30px",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "500%",
  marginRight: "10px",
}));

export const BoxLineWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 55px;
  flex: 1;
`;

export const WindDirectionContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const BoxContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  justify-content: space-between;
`;

export const HighlightsTitle = styled.h2`
  font-size: 20px;
`;

export const Signature = styled.p`
  font-size: 14px;
  padding: 15px;
  align-self: center;

  @media (max-width: 850px) {
    padding: 5px 0px 0px 0px;
  }
`;
export const SignatureName = styled.span`
  text-decoration: underline;
  font-weight: bold;
`;

export const HighlightsSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 850px) {
    padding: 10px;
  }
`;
export const HighlightsTitleWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 5px 0px;
`;

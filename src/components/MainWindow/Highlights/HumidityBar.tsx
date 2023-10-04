import { styled } from "styled-components";

const HumidityBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 250px;
  height: 10px;
  background-color: #f0f0f0;
  border-radius: 10px;
  overflow: hidden;
`;

export const HumidityLineContainer = styled.div`
  display: flex;
  height: 55px;
  flex: 1;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
`;

const HumidityProcent = styled.div<{ width: number }>`
  width: ${(props) => props.width}%;
  height: 100%;
  background-color: #fcf55f;
`;

export const NumbersLine = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ProcentSymbolWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const HumidityBar: React.FC<{ humidityProcent: number }> = ({
  humidityProcent,
}: {
  humidityProcent: number;
}) => {
  return (
    <>
      <NumbersLine>
        <p>0</p>
        <p>50</p>
        <p>100</p>
      </NumbersLine>
      <HumidityBarContainer>
        <HumidityProcent width={humidityProcent} />
      </HumidityBarContainer>
    </>
  );
};

export default HumidityBar;

import { styled } from "styled-components";

export const CurrentWeatherContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100% - 80px);
  justify-content: space-evenly;
  align-items: center;
`;

export const WeatherImg = styled.img`
  width: 100%;
  height:100%;
  object-fit: cover;
`;

export const WeatherImgContainer = styled.div`
  width: 100%;
  display: flex;
  height:256px;
  align-self: center;
  justify-content: center;
  align-items: center;
`;
export const WeatherImgMobile = styled.img`
  width: 200px;
  height: 200px;
`;

export const CurrentWeatherInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FirstTemp = styled.p`
  font-size: 72px;
  color: white;
`;

export const SecondTemp = styled.span`
  font-size: 82px;
  color: white;
  position: relative;
  top: 7px;
`;

export const DegreesRed = styled.span`
  font-size: 42px;
  color: #ff544f;
`;
export const DegreesBlue = styled.span`
  font-size: 42px;
  color: #1352ab;
`;

export const Description = styled.p`
  font-size: 24px;
  padding: 10px;
  text-align: center;
`;

export const CityName = styled.p`
  display: flex;
  font-size: 18px;
  justify-content: center;
  align-self: center;
  margin-top: 15px;
`;

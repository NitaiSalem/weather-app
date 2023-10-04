import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    color: #C0D5E0;
    font-family: 'Nunito Sans', sans-serif;
    box-sizing: border-box;
  }
  html, #root{
overflow-x: hidden;
    display:flex;
    background-color: #090a31;
    @media (max-width: 1066px) {
      flex-direction: column;
    }
  }
  body{
width: 100%;
height: 100%;
  }
`;

import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const colors = {
  redColor: '#f26b5b',
  blueColor: '#0f4c81',
  whiteColor: '#f5f5f5',
  blackColor: '#2f3435',
  greenColor: '#81cc45',
  skyblueColor: '#a0b8d0',
  grayColor: '#908e8e',
  darkgrayColor: '#586069',
  brightColor: '#fafafa',
  lightGrayColor: '#c7c7c7',
};

const border = '1px solid #e1e4e8';
const radius = '10px';
const radiusSmall = '5px';
const cardShadow = '3px 3px 9px #e1e4e8';

export const theme = {
  ...colors,
  border,
  radius,
  radiusSmall,
  cardShadow,
};

export const GlobalStyle = createGlobalStyle`
  ${reset};
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap');
  * {
      box-sizing: border-box;
  }
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  a {
      color: black;
      text-decoration: none;
  }
  button {
      border: none;
      outline: none;
      border-radius: ${(props) => props.theme.radius};
      color: ${(props) => props.theme.whiteColor};
      font-size: 18px;
      font-weight: 700;
      cursor: pointer;
  }
  p {
      margin: 0;
  }
  input:focus {
      outline: none;
  }
`;
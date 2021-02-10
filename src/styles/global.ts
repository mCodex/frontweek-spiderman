import { createGlobalStyle, ThemeProps } from 'styled-components';

interface IColors {
  gray3: string;
  white: string;
}

export default createGlobalStyle<ThemeProps<IColors>>`
  * {
    margin: 0;
    padding: 0;
    /* outline: 0; */
    box-sizing: border-box;

    font-family: 'Mukta', sans-serif;
    -webkit-font-smoothing: antialiased;  
  }

  body {
    width: 100%;
    height: 100vh;
    
    background-color: #1a1a1a;
  }

  img, svg {
    display: block;
    width: 100%;
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme.white}
  }

  .border {
    border: 1px solid red;
  }

  p {
    font-size: 16px;
    color: ${(props) => props.theme.gray3};
    letter-spacing: 1px;
    line-height: 140%;
  }
`;

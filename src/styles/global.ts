import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    width: 100%;
    height: 100vh;
    
    background-color: #1a1a1a;
  }
`;

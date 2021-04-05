import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
#root {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(24, 1fr);
  grid-column-gap: 10px;
  grid-template-rows: repeat(24, 1fr);
  min-width: 992px;
  background: ${({ theme }) => theme.contrastBlockColor};
  overflow: hidden;
  font-family: 'Open Sans', sans-serif;
  color: ${({ theme }) => theme.fontColor};
  font-size: 14px;
}

ul {
  background: ${({ theme }) => theme.mainColor};
}

`;

export default GlobalStyles;

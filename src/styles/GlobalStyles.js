import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
  /*Resets everything to 0 universally*/
  border: 0;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body{
  background: ${({theme}) => theme.colors.body};
}

`
//Export Styles
export default GlobalStyles;
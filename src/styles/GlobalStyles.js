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
  /*Set Color*/
  background: wheat;
  backdrop-filter: blur( 4px );
  -webkit-backdrop-filter: blur( 4px );
  border-radius: 10px;

  //Keep footer at bottom
  min-height: 100vh;
}

`
//Export Styles
export default GlobalStyles;
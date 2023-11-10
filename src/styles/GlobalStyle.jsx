import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    box-sizing: border-box;
    padding:0;
    border: 0;
    font-family: "Poppins", sans-serif;
}

html{
    width:100vw;
    height: 100vh;
    background: linear-gradient(#121212, #212b46);
    color: #fefefe;
    font-weight:bold;
}
`



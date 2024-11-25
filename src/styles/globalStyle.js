import {createGlobalStyle} from "styled-components"

export const GlobalStyle=createGlobalStyle`
*,*::before,*::after{
    margin:0;
    padding:0;
    box-sizing: border-box;
    border:0;
    text-decoration: none;
    list-style-type: none;
}
body{
    background:${({theme})=>theme.bg2};
    color:${({theme})=>theme.text};
    /* font-family*/
    letter-spacing:.6px;
    font-family:'Roboto',sans-serif;
}
`
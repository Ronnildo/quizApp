import { createGlobalStyle } from "styled-components";

import imagemFundo from "../assets/BG.png";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box
  }

  body{
    background: #2148C0 url(${imagemFundo}) no-repeat ;
    -webkit-font-smoothing: antialiased;
    color:#FFF;
    background-size: cover;
    background-attachment: fixed;
  }

  body, input, button{
    font: 16px,Roboto, sans-serif;
  }

  button{
    cursor: pointer
  }

`;
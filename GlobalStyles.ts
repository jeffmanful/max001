import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    ${"" /* it appears this was making the base font-size 16px before */}
    font-size: 10px;
    --rust: #A34815;
    --black: #111111;
    --char: #3D3D3D;
    --lh: 1.8rem;
    --max-lines: 3;
    --max-lines-news: 6;
  }

  @font-face {
    font-family: Silver;
    src: url('silver_south_serif.otf');
    font-weight: bold;
  }

  @font-face {
    font-family: Daikon;
    src: url('daikon-regular.oft');
    font-weight: bold;
  }

  @font-face {
    font-family: Daikon Light;
    src: url('daikon-light.otf');
    font-weight: 400;
  }
  
  html, body {
    margin: 0 !important;
    font-family: 'porpora', Tahoma, Geneva, sans-serif;
    font-size: 10px;
    height: 100%;
  }

  body {
    margin: 0;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background: black;
    overflow: hidden;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  select {
    font-family: helvetica;
    padding: 2rem 0;
    font-size: 1.3rem;
  }

  h1, h2, h3, h4, h5, h6, h7, p, a, ul, li, button, input {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    font-family: Silver;
    color: white;
  }

  p, h4 {
    font-family: Daikon Light;
  }

  /* Do we need this?? */
  input, button {
    &:focus {
      outline: none;
    }
  }

  button, input[type="submit"], input[type="reset"] {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
  }

  .container {
    scroll-snap-type: y mandatory;
    overflow-y: scroll;
    /* OLD */
    scroll-snap-points-y: repeat(300px);

    section {
      scroll-snap-align: start;
    }
  }
`;

export default GlobalStyles;

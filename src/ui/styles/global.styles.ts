import { createGlobalStyle, css } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    vertical-align: baseline;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    scroll-behavior: smooth !important;
    font-family: 'Roboto', sans-serif;
  }

  ${({ theme }) => css`
    html {
      font-size: 62.5%;
    }

    li {
      list-style: none;
    }

    button {
      cursor: pointer;
    }

    body {
      background-color: ${theme.colors.bg_color};
      color: ${theme.colors.texts};
      font-size: ${theme.font.sizes.text_base};
      width: 100%;
      min-height: 100vh;
      font-weight: 400;
    }

    ::-webkit-overflow-scrolling: touch;
    ::-webkit-scrollbar {
      width: 10px;
      height: 10px;
      overflow-y: auto;
    }

    ::-webkit-scrollbar-track {
      background: #333;
    }

    ::-webkit-scrollbar-thumb {
      background: ${theme.colors.green};
      border-radius: 10px;
    }
  `}
`;

export default GlobalStyle;

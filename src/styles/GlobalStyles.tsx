import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  html {
    scroll-behavior: smooth;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    width: 100%;
    heigh: 100%;
  }

  :root {
    --main-color: #1D283A;
    --second-color: #539713;
    --text-color: rgba(255, 255, 255, 1);


    display: flex;
    flex-direction: column;
    font-family: 'Montserrat', sans-serif;
    padding: 0;
    margin: 0;
    background-color: var(--main-color)
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    font-weight: 500;
    margin: 0;
    padding: 0;
  }

  ul,
  ol {
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 0;
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  button {
    cursor: pointer;
    border: none;
    display: block;
  }
`;

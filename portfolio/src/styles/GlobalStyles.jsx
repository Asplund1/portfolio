import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap");

  :root {
    font-family: "DM Sans", sans-serif;
    color: #1d2421;
    background: #f5f3ee;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
  }

  * { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  body {
    min-width: 320px;
    background: linear-gradient(rgba(29, 36, 33, 0.035) 1px, transparent 1px),
      linear-gradient(90deg, rgba(29, 36, 33, 0.035) 1px, transparent 1px), #f5f3ee;
    background-size: 36px 36px;
    color: #1d2421;
    line-height: 1.65;
  }
  a { color: inherit; text-decoration: none; }
  button, a { -webkit-tap-highlight-color: transparent; }
`;

export default GlobalStyles;

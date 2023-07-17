import { createGlobalStyle } from 'styled-components';
import { device } from './Theme';

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  #root {
    min-height: 100vh;
  }

  body {
    min-height: 100vh;
    min-width: 20rem;
    text-rendering: optimizeSpeed;
    font-family: ${({ theme }) => theme.typography.type.sans};
    font-size: ${({ theme }) => theme.typography.size.normal};
    line-height: 1.5;

    background-color: ${({ theme }) => theme.colors.backgroundBody};
    color: ${({ theme }) => theme.colors.text};
  }

  h1 {
    font-size: ${({ theme }) => theme.typography.size.large};
    line-height: 1;

    @media ${device.tablet} {
      font-size: ${({ theme }) => theme.typography.size.xLarge};
    }
  }

  img,
  picture,
  figure {
    display: block;
    max-width: 100%;
  }

  input,
  button,
  select,
  textarea {
    font: inherit;
  }

  html:focus-within {
    scroll-behavior: smooth;
  }

  @media (prefers-reduced-motion: reduce) {
    html:focus-within {
      scroll-behavior: auto;
    }
    
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
`;
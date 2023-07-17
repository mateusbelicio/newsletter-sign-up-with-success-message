import { createGlobalStyle } from 'styled-components';
import { device } from './Theme';

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Dancing+Script&family=League+Spartan:wght@300;400;500;600;700;800;900&family=Roboto:wght@400;700&display=swap');

  *,
  *::before,
  *::after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    min-height: 100vh;
    text-rendering: optimizeSpeed;
    font-family: ${({ theme }) => theme.typography.type.sans};
    font-size: ${({ theme }) => theme.typography.size.normal};

    background-color: ${({ theme }) => theme.colors.backgroundBody};
  }

  h1 {
    font-size: ${({ theme }) => theme.typography.size.large};

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
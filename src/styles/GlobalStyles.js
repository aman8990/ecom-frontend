import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  .toast-style {
    font-size: 20px;
    font-weight: 600;
    max-width: 800px;
    padding: 16px 24px;

    @media (max-width: 480px) {
      font-size: 16px;
      max-width: 300px;
      padding: 8px 16px;
    }

    @media (min-width: 481px) and (max-width: 768px) {
      font-size: 18px;
      max-width: 500px;
      padding: 12px 20px;
    }

    @media (min-width: 769px) {
      font-size: 20px;
      max-width: 800px;
      padding: 16px 24px;
    }
  }
`;

export default GlobalStyle;

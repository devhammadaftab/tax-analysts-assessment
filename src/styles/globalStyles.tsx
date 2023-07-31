import { Global, css } from '@emotion/react';

const globalStyles = css`
  * {
    font-family: 'Poppins', sans-serif !important;
    -webkit-tap-highlight-color: transparent;
    &::selection {
      background-color: #9a52ff;
      color: #ffffff;
      text-shadow: 0 0 8px #d22eff;
    }
  }
  :root {
    font-family: 'Poppins', sans-serif;
    line-height: 1.5;
    font-weight: 400;

    color-scheme: light;
    color: #f5f5f5;

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
  }

  html {
    background-color: white;
    box-sizing: border-box;
    max-width: 100%;
  }
  body {
    touch-action: manipulation;
    @media (max-width: 1024px) {
      margin: 20px;
    }

    /* Custom Scrollbar Styles */
    ::-webkit-scrollbar {
      width: 10px;
    }

    ::-webkit-scrollbar-thumb {
      background-color: grey;
      border-radius: 64px;
    }

    ::-webkit-scrollbar-thumb:hover {
      background-color: #8750ff;
    }

    ::-webkit-scrollbar-track {
      border-radius: 64px;
      background-color: whitesmoke;
    }
  }

  pre {
    background-color: black;
    color: white;
    padding: 16px;
    border-radius: 16px;
    overflow-x: auto;
  }

  .EmojiPickerReact {
    --epr-hover-bg-color: #b624ffaf;
    --epr-focus-bg-color: #b624ffaf;
    --epr-highlight-color: #b624ff;
    --epr-search-border-color: #b624ff;
    --epr-category-icon-active-color: #b624ff;
  }

  .MuiDialog-container {
    backdrop-filter: blur(4px);
  }
  .MuiPaper-elevation8 {
    border-radius: 16px !important;
  }
  .MuiSelect-select,
  .MuiSelect-select {
    display: flex !important;
    justify-content: left;
    align-items: center;
    gap: 4px;
  }
  .MuiTooltip-tooltip {
    color: white !important;
    background-color: #626262c5 !important;
    backdrop-filter: blur(6px) !important;
    padding: 8px 16px !important;
    border-radius: 8px !important;
    font-size: 12px !important;
  }
`;

export const GlobalStyles = () => <Global styles={globalStyles} />;

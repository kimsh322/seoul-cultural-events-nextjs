import { Global, css } from "@emotion/react";

const styles = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    font-size: 16px;
  }

  body {
    font-family: "Noto Sans KR", sans-serif;
  }
`;

const GlobalStyle = () => {
  return <Global styles={styles} />;
};

export default GlobalStyle;

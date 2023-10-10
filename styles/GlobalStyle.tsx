import { Global, css } from "@emotion/react";

const styles = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    font-size: 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  body {
    font-family: "Noto Sans KR", sans-serif;
    width: 100vw;
    max-width: 1024px;
  }

  a {
    text-decoration: none;
  }
`;

const GlobalStyle = () => {
  return <Global styles={styles} />;
};

export default GlobalStyle;

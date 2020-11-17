import { css, Global } from '@emotion/react';

const globalBodyStyles = css`
  body {
    margin: 0;
  }
`;

const indexPageStyles = css`
  padding: 10px;
`;

const titleStyles = css`
  font-size: 32px;
`;

function Index() {
  return (
    <div>
      <Global styles={globalBodyStyles} />
      <div css={indexPageStyles}>
        <h1 css={titleStyles}>Project Setup</h1>
      </div>
    </div>
  );
}

export default Index;

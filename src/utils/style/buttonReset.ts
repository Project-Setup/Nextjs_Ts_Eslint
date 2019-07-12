import { css } from '@emotion/core';

const buttonReset = css`
  border: none;
  border-radius: 0;
  margin: 0;
  padding: 0;
  width: auto;
  overflow: visible;
  background: transparent;

  &:focus {
    outline: none;
    box-shadow: none;
  }
`;

export default buttonReset;

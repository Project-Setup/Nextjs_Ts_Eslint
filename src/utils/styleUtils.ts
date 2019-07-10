import css from 'styled-jsx/css';

export const rem = (num: number) => {
  const remVal = num / 16;
  return `${remVal}rem`;
};

export const buttonReset = css.global`
  button {
    border: none;
    border-radius: 0;
    margin: 0;
    padding: 0;
    width: auto;
    overflow: visible;
    background: transparent;
  }

  button:focus {
    outline: none;
    box-shadow: none;
  }
`;

export const listReset = css`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const resetAll = css`
  position: static;
  float: none;
  width: auto;
  height: auto;
  clear: both;
  margin: 0;
  border: 0;
  padding: 0;
`;

export const transition = (duration: number = 250, easing: string = 'ease-in-out') => (
  ...properties: string[]
) => {
  const transitions = [...properties];
  const makeTransition = (property: string, index: number) =>
    `${index !== 0 ? ', ' : ''}${property} ${duration}ms ${easing}`;
  return css.resolve`
    transition: ${transitions.map(makeTransition)};
  `;
};

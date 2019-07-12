import { css } from '@emotion/core';

const transition = (duration: number = 250, easing: string = 'ease-in-out') => (
  ...properties: string[]
) => {
  const transitions = [...properties];
  const makeTransition = (property: string, index: number) =>
    `${index !== 0 ? ', ' : ''}${property} ${duration}ms ${easing}`;
  return css`
    transition: ${transitions.map(makeTransition)};
  `;
};

export default transition;

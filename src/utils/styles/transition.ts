import { css } from '@emotion/react';

const transition = (duration = 250, easing = 'ease-in-out') => (
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

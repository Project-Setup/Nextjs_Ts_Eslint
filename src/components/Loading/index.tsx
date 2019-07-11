import React from 'react';
import { css, keyframes } from '@emotion/core';
import { rem } from '../../utils/styleUtils';

interface Props {
  boxSize?: number;
  width?: number;
  animationTime?: number;
  numBox?: number;
  boxColor?: string;
}

const Loading: React.FC<Props> = ({
  boxSize = 20,
  width = 180,
  animationTime = 1200,
  numBox = 3,
  boxColor = 'skyblue',
}) => {
  const animationDelayStyles = (position: number) => css`
    animation-delay: ${animationTime * (position / numBox)}ms;
  `;

  const boxStyles = Array.from(Array(numBox), (_, position) => animationDelayStyles(position));

  const scaleEffects = keyframes`
    from, ${Math.floor(200 / numBox)}%, to {
      width: ${rem(boxSize)};
      height: ${rem(boxSize)};
      opacity: 0.5;
    }
    ${Math.floor(100 / numBox)}% {
      width: ${rem(boxSize * 2)};
      height: ${rem(boxSize * 2)};
      opacity: 1;
    }
  `;

  const containerStyles = css`
    box-sizing: border-box;
    margin-top: ${rem(40)};
    margin-bottom: ${rem(40)};
    margin-left: auto;
    margin-right: auto;
    display: flex;
    max-width: ${rem(width)};
    height: ${rem(boxSize * 2)};
    width: 100%;
    flex-flow: row;
    justify-content: space-evenly;
    align-items: center;

    & > div {
      width: ${rem(boxSize)};
      height: ${rem(boxSize)};
      opacity: 0.5;
      background-color: ${boxColor};
      animation-name: ${scaleEffects};
      animation-duration: ${animationTime}ms;
      animation-iteration-count: infinite;
    }
  `;

  return (
    <div css={containerStyles}>
      {boxStyles.map(styles => (
        <div key={styles.name} css={styles} />
      ))}
    </div>
  );
};

export default Loading;

import React from 'react';
import css from 'styled-jsx/css';
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
  const animationDelayStyles = (position: number) => css.resolve`
    animation-delay: ${animationTime * (position / numBox)}ms;
  `;

  const boxStyles = Array.from(Array(numBox), (_, position) => animationDelayStyles(position));

  const containerStyles = css.resolve`
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

    @keyframes scale {
      0% {
        width: ${rem(boxSize)};
        height: ${rem(boxSize)};
        opacity: 0.5;
      }
      ${Math.floor(100 / numBox)}% {
        width: ${rem(boxSize * 2)};
        height: ${rem(boxSize * 2)};
        opacity: 1;
      }
      ${Math.floor(200 / numBox)}% {
        width: ${rem(boxSize)};
        height: ${rem(boxSize)};
        opacity: 0.5;
      }
      100% {
        width: ${rem(boxSize)};
        height: ${rem(boxSize)};
        opacity: 0.5;
      }
    }

    :global(${boxStyles.map(styles => `.${styles.className}`).join(', ')}) {
      width: ${rem(boxSize)};
      height: ${rem(boxSize)};
      opacity: 0.5;
      background-color: ${boxColor};
      animation-name: scale;
      animation-duration: ${animationTime}ms;
      animation-iteration-count: infinite;
    }
  `;

  return (
    <div className={containerStyles.className}>
      {boxStyles.map(styles => (
        <div key={styles.className} className={styles.className}>
          {styles.styles}
        </div>
      ))}
      {containerStyles.styles}
    </div>
  );
};

export default Loading;

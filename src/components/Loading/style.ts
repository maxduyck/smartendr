import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const wing1 = keyframes`
  0%,
  10%  {transform:scale(var(--s,1)) translate(0px)   perspective(150px) rotateY(0deg) }
  33%  {transform:scale(var(--s,1)) translate(-10px) perspective(150px) rotateX(0deg) }
  66%  {transform:scale(var(--s,1)) translate(-10px) perspective(150px) rotateX(-180deg)}
  90%,
  100% {transform:scale(var(--s,1)) translate(0px)   perspective(150px) rotateX(-180deg)}
`;

const wing2 = keyframes`
  0%,49.99% {background:#fff}
  50%,100%  {background:#fff}
`;

export const Styled = {
  Loader: styled.div`
    width: 80px;
    height: 40px;
    display: flex;

    &:before,
    &:after {
      content: '';
      flex: 1;
      clip-path: polygon(0 0,100% 0,100% 100%);
      background: #fff;
      animation: 
        ${wing1} 1s infinite linear alternate,
        ${wing2} 2s infinite linear -.5s;
    }
    &:after {
      --s:-1,-1;
    }
  `,
  Error: styled.div`
    background-color: #fff;;
    border-radius: 5px;
    border: 3px solid red;
    font-size: 18px;
    font-weight: 700;
    padding: 30px 20px;
  `,
  Wrapper: styled.div`
    align-items: center;
    bottom: 0;
    display: flex;
    justify-content: center;
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
    `,
};

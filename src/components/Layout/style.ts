import styled from '@emotion/styled';

const headerHeight = '60px';

export const Styled = {
  Body: styled.div`
    bottom: 0;
    left: 0;
    overflow: auto;
    padding: 1em 0;
    position: absolute;
    right: 0;
    top: ${headerHeight};
  `,
  Header: styled.div`
    align-items: center;
    background-color: #333;
    color: #fff;
    display: flex;
    font-size: 20px;
    height: ${headerHeight};
    justify-content: center;
  `,
};

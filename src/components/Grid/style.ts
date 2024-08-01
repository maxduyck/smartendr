import styled from '@emotion/styled';

export const Styled = {
  Column: styled.div`
    display: inline-block;
    margin: .5em;
    vertical-align: top;
    width: 300px;

    &:first-of-type {
      margin-left: 1em;
    }

    &:last-of-type {
      margin-right: 1em;
    }
  `,
  Container: styled.div`
    white-space: nowrap;
  `,
};

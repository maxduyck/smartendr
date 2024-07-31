import styled from '@emotion/styled';

export const Styled = {
  Container: styled.div`
    background-color: #ffffff;
    border-radius: 5px;
    display: inline-block;
    margin: 0 10px;
    vertical-align: top;
    width: 300px;
  `,
  Label: styled.span`
    display: block;
    width: auto;
  `,
  List: styled.div`
    display: flex;
    flex-direction: column;
    gap: .5em;
    padding: .5em;
  `,
  Name: styled.div`
    background-color: #ffffff;
    padding: 15px 0;
    text-align: center;
  `,
  Product: styled.div`
    display: flex;
  `,
  Sum: styled.div`
    background: #f0f0f0;
    display: flex;
    font-weight: 700;
    justify-content: space-between;
    padding: .5em 1em;
  `,
  Quantity: styled.span`
    display: block;
    margin-right: .5em;
    text-align: right;
    width: 30px;
  `,
};

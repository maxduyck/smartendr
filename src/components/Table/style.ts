import styled from '@emotion/styled';

export const Styled = {
  Card: styled.div`
    background-color: #ffffff;
    border: 1px solid #e9eaf4;
    border-radius: 5px;
    box-shadow: 0 3px 10px rgba(0, 0, 0, .5);
    display: inline-block;
    margin: 0 10px 20px;
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
    background-color: #e9eaf4;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    font-weight: 700;
    padding: 15px 0;
    text-align: center;
  `,
  Product: styled.div`
    display: flex;
  `,
  Sum: styled.div`
    background-color: #f0f0f0;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    display: flex;
    font-weight: 700;
    justify-content: space-between;
    padding: .5em 1em;
  `,
  Quantity: styled.span`
    display: block;
    margin-right: .5em;
    text-align: right;
    width: 20px;
  `,
};

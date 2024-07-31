import React from 'react';
import { Styled } from './style';

type Props = Table;

const Table = ({ name, products, sum }: Props) => (
  <Styled.Card>
    <Styled.Name>{name}</Styled.Name>
    <Styled.List>
      {products.map(({ name, quantity }) => (
        <Styled.Product key={name}>
          <Styled.Quantity>{quantity}</Styled.Quantity>
          <Styled.Label>{name}</Styled.Label>
        </Styled.Product>
      ))}
    </Styled.List>
    <Styled.Sum>
      <span>Total:</span>
      <span data-test-id="sum">{sum.toFixed(2)}€</span>
    </Styled.Sum>
  </Styled.Card>
);

export default Table;

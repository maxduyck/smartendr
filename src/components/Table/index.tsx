import React, { useState } from 'react';
import { Styled } from './style';

type Props = Table;

const Table = ({ name, products, sum }: Props) => {
  const isExtendable = products.length > 10;
  const [isShrunk, setIsShrunk] = useState(isExtendable);
  
  return (
    <Styled.Card>
      <Styled.Name>{name}</Styled.Name>
      <Styled.List>
        {products.slice(0, isShrunk ? 10 : products.length).map(({ name, quantity }) => (
          <Styled.Product key={name}>
            <Styled.Quantity>{quantity}</Styled.Quantity>
            <Styled.Label data-test="product">{name}</Styled.Label>
          </Styled.Product>
        ))}
      </Styled.List>
      {isExtendable && (
        <Styled.Toggle
          onClick={() => setIsShrunk(!isShrunk)}
          type="button"
        >
          View {isShrunk ? 'more ↓' : 'less ↑'}
        </Styled.Toggle>
      )}
      <Styled.Sum>
        <span>Total:</span>
        <span data-test="sum">{sum.toFixed(2)}€</span>
      </Styled.Sum>
    </Styled.Card>
  );
};

export default Table;

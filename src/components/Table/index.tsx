import React from 'react';
// import OrderCard from '../OrderCard';
import { Styled } from './style';

type Props = Table;

const Table = ({ name, products, sum }: Props) => {
  const allOrders: FlatOrder[] = [];

  products.forEach((current) => {
    const existing = allOrders.find((product) => product.id === current.id);
    if (existing) {
      const index = allOrders.findIndex((product) => product.id === current.id);
      const quantity = existing.quantity + current.quantity;
      allOrders[index] = { ...existing, quantity };
    } else {
      allOrders.push(current);
    }
  });

  return (
    <Styled.Container>
      <Styled.Name>{name}</Styled.Name>
      <Styled.List>
        {allOrders.map(({ name, quantity }) => (
          <Styled.Product>
            <Styled.Quantity>{quantity}</Styled.Quantity>
            <Styled.Label>{name}</Styled.Label>
          </Styled.Product>
        ))}
      </Styled.List>
      <Styled.Sum>
        <span>Total:</span>
        <span>{sum.toFixed(2)}€</span>
      </Styled.Sum>
    </Styled.Container>
  );
};

export default Table;

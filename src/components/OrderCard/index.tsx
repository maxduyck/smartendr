import React from 'react';
import { Styled } from './style';

type Props = {
  products: FlatOrder[];
};

const OrderCard = ({ products }: Props) => {
  return (
    <Styled.Card>
      {products.map(({ name, quantity }) => (
        <Styled.Product>
          <Styled.Quantity>{quantity}</Styled.Quantity>
          <Styled.Name>{name}</Styled.Name>
        </Styled.Product>
      ))}
    </Styled.Card>
  );
};

export default OrderCard;
